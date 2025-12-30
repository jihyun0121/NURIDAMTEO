import { useEffect, useState } from "react";
import { SurveyAPI, AnswerAPI, ParticipationAPI } from "../../../api/api";
import QuestionRenderer from "./QuestionRenderer";
import { useNavigate } from "react-router-dom";
import TextButtonS from "../../../ui/button/TextButtonS";

export default function AnswerForm({ survey }) {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem("user_id");
        if (!userId) {
            alert("로그인이 필요합니다");
            navigate("/login");
            return;
        }

        if (!survey?.survey_id) return;

        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [survey?.survey_id]);

    async function init() {
        try {
            const q = await SurveyAPI.getQuestionsBySurvey(survey.survey_id);
            setQuestions(q.data || []);
        } catch (e) {
            console.error("질문 로드 실패", e);
            alert("질문을 불러오는 중 문제가 발생했습니다");
        }
    }

    function updateAnswer(answerKey, value) {
        setAnswers((prev) => ({ ...prev, [answerKey]: value }));
    }

    function validateRequired() {
        for (const q of questions) {
            if (!q.is_required) continue;

            const qId = q.question_id;
            const type = (q.question_type || "").toUpperCase();

            if (type === "CHECKBOX") {
                const prefix = `${qId}_`;
                const ok = Object.entries(answers).some(([key, val]) => key.startsWith(prefix) && !!val);
                if (!ok) return false;
            } else {
                const val = answers[String(qId)];
                if (val == null || String(val).trim() === "") return false;
            }
        }
        return true;
    }

    async function submit() {
        if (loading) return;

        if (!validateRequired()) {
            alert("필수 질문에 응답해주세요.");
            return;
        }

        const userId = sessionStorage.getItem("user_id");
        if (!userId) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        setLoading(true);

        try {
            const payloadAnswers = [];

            for (const q of questions) {
                const qId = q.question_id;
                const type = (q.question_type || "").toUpperCase();
                const qKey = String(qId);

                if (type === "CHECKBOX") {
                    const prefix = `${qId}_`;

                    Object.entries(answers).forEach(([key, val]) => {
                        if (!key.startsWith(prefix)) return;
                        if (!val) return;

                        const [, optIdStr] = key.split("_");
                        if (!optIdStr) return;

                        payloadAnswers.push({
                            question_id: qId,
                            option_id: Number(optIdStr),
                            answer_text: null,
                            answer_long: null,
                        });
                    });
                } else if (type === "RADIO") {
                    const selectedOptionId = answers[qKey];
                    if (selectedOptionId == null || selectedOptionId === "") continue;

                    payloadAnswers.push({
                        question_id: qId,
                        option_id: Number(selectedOptionId),
                        answer_text: null,
                        answer_long: null,
                    });
                } else {
                    const val = answers[qKey];
                    if (val == null || String(val).trim() === "") continue;

                    const text = String(val);

                    if (type === "LONG") {
                        payloadAnswers.push({
                            question_id: qId,
                            option_id: null,
                            answer_text: null,
                            answer_long: text,
                        });
                    } else {
                        payloadAnswers.push({
                            question_id: qId,
                            option_id: null,
                            answer_text: text,
                            answer_long: null,
                        });
                    }
                }
            }

            if (payloadAnswers.length === 0) {
                alert("제출할 응답이 없습니다.");
                setLoading(false);
                return;
            }

            for (const ans of payloadAnswers) {
                await AnswerAPI.createAnswer({
                    question_id: ans.question_id,
                    option_id: ans.option_id,
                    answer_text: ans.answer_text,
                    answer_long: ans.answer_long,
                    user_id: Number(userId),
                });
            }

            await ParticipationAPI.createParticipaiton({
                user_id: Number(userId),
                target_type: "SURVEY",
                target_id: survey.survey_id,
                participation_type: "JOIN",
            });

            await SurveyAPI.updateParticipate(survey.survey_id, "plus");

            alert("제출이 완료되었습니다!");
            navigate(-1);
        } catch (e) {
            console.error("제출 실패", e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="answer-container">
            <div className="answer-wrapper">
                {questions.map((q) => (
                    <QuestionRenderer key={q.question_id} question={q} answers={answers} onChange={updateAnswer} />
                ))}
            </div>
            <div className="answer-buttons">
                <TextButtonS content="목록으로" onClick={() => navigate(-1)} />
                <TextButtonS content={loading ? "제출 중..." : "제출하기"} type="hover" onClick={submit} disabled={loading} />
            </div>
        </div>
    );
}

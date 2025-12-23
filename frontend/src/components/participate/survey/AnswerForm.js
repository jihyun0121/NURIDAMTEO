import { useEffect, useState } from "react";
import { SurveyAPI } from "../../../api/api";
import QuestionRenderer from "./QuestionRenderer";
import { useNavigate } from "react-router-dom";
import TextButtonS from "../../../ui/button/TextButtonS";

export default function AnswerForm({ survey }) {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const userId = sessionStorage.getItem("user_id");
        if (!userId) {
            alert("로그인이 필요합니다.");
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
            alert("질문을 불러오는 중 문제가 발생했습니다.");
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
        if (!validateRequired()) {
            alert("필수 질문에 응답해주세요.");
            return;
        }

        alert("제출 로직");
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
                <TextButtonS content="제출하기" type="hover" onClick={submit} />
            </div>
        </div>
    );
}

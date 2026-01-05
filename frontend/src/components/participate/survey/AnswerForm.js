import { useEffect, useState } from "react";
import { SurveyAPI, AnswerAPI, ParticipationAPI, NotificationAPI, MileageAPI, UserAPI } from "../../../api/api";
import QuestionRenderer from "./QuestionRenderer";
import { useNavigate } from "react-router-dom";
import TextButtonS from "../../../ui/button/TextButtonS";
import { useNotificationRefresh } from "../../proposal/NotificationContext";

export default function AnswerForm({ survey }) {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [loginUser, setLoginUser] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [, setMyParticipationId] = useState(null);
    const [allAnswers, setAllAnswers] = useState([]);
    const [myAnswers, setMyAnswers] = useState([]);
    const { refreshNotifications } = useNotificationRefresh();
    const userId = sessionStorage.getItem("user_id");

    useEffect(() => {
        if (!userId) {
            alert("로그인이 필요합니다");
            navigate("/login");
            return;
        }
        if (!survey?.survey_id) return;

        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [survey?.survey_id]);

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await UserAPI.getUser(userId);
                setLoginUser(res.data);
            } catch (e) {
                console.log("유저 정보 불러오기 실패", e);
            }
        }
        fetchUser();
    }, [userId]);

    async function init() {
        try {
            const q = await SurveyAPI.getQuestionsBySurvey(survey.survey_id);
            const qList = q.data || [];
            setQuestions(qList);

            const pRes = await ParticipationAPI.getUserParticipaiton(userId);
            const myParticipations = pRes.data || [];

            const mySurveyParticipation = myParticipations.find((p) => Number(p.target_id) === Number(survey.survey_id) && String(p.target_type).toUpperCase() === "SURVEY");

            if (mySurveyParticipation) {
                setIsSubmitted(true);

                const participationId = mySurveyParticipation.participation_id;
                setMyParticipationId(participationId);

                const [myARes, allARes] = await Promise.all([AnswerAPI.getAnswersByParticipation(participationId), AnswerAPI.getAnswersBySurvey(survey.survey_id)]);

                setMyAnswers(myARes?.data || []);
                setAllAnswers(allARes?.data || []);
                setAnswers(buildAnswersStateFromMyAnswers(qList, myARes.data || []));
            } else {
                setIsSubmitted(false);
                setMyParticipationId(null);
                setMyAnswers([]);
                setAllAnswers([]);
            }
        } catch (e) {
            console.error("질문 로드 실패", e);
            alert("질문을 불러오는 중 문제가 발생했습니다");
        }
    }

    function buildAnswersStateFromMyAnswers(qList, myAnswerList) {
        const next = {};
        qList.forEach((q) => {
            const qId = q.question_id;
            const type = (q.question_type || "").toUpperCase();
            const list = myAnswerList.filter((a) => Number(a.question_id) === Number(qId));

            if (type === "RADIO") {
                next[String(qId)] = list[0]?.option_id ?? "";
            } else if (type === "CHECK") {
                list.forEach((a) => {
                    if (a.option_id) next[`${qId}_${a.option_id}`] = true;
                });
            } else {
                next[String(qId)] = list[0]?.answer_text ?? "";
            }
        });
        return next;
    }

    function updateAnswer(answerKey, value) {
        if (isSubmitted) return;
        setAnswers((prev) => ({ ...prev, [answerKey]: value }));
    }

    function validateRequired() {
        for (const q of questions) {
            if (!q.is_required) continue;

            const qId = q.question_id;
            const type = (q.question_type || "").toUpperCase();

            if (type === "CHECK" || type === "CHECKBOX") {
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
        if (isSubmitted) return;
        if (loading) return;

        if (!validateRequired()) {
            alert("필수 질문에 응답해주세요.");
            return;
        }

        if (!userId) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        setLoading(true);

        try {
            const participationRes = await ParticipationAPI.createParticipaiton({
                user_id: Number(userId),
                target_type: "SURVEY",
                target_id: survey.survey_id,
                participation_type: "JOIN",
            });

            const participationId = participationRes?.data?.participation_id;
            if (!participationId) {
                alert("참여 정보 생성에 실패했습니다.");
                return;
            }

            const payloadAnswers = [];

            for (const q of questions) {
                const qId = q.question_id;
                const type = (q.question_type || "").toUpperCase();
                const qKey = String(qId);

                if (type === "CHECK" || type === "CHECKBOX") {
                    const prefix = `${qId}_`;
                    Object.entries(answers).forEach(([key, val]) => {
                        if (!key.startsWith(prefix)) return;
                        if (!val) return;
                        const [, optIdStr] = key.split("_");
                        if (!optIdStr) return;

                        payloadAnswers.push({
                            participation_id: participationId,
                            question_id: qId,
                            option_id: Number(optIdStr),
                            answer_text: null,
                        });
                    });
                } else if (type === "RADIO") {
                    const selectedOptionId = answers[qKey];
                    if (selectedOptionId == null || selectedOptionId === "") continue;

                    payloadAnswers.push({
                        participation_id: participationId,
                        question_id: qId,
                        option_id: Number(selectedOptionId),
                        answer_text: null,
                    });
                } else {
                    const val = answers[qKey];
                    if (val == null || String(val).trim() === "") continue;

                    payloadAnswers.push({
                        participation_id: participationId,
                        question_id: qId,
                        option_id: null,
                        answer_text: String(val),
                    });
                }
            }

            if (payloadAnswers.length === 0) {
                alert("제출할 응답이 없습니다.");
                return;
            }

            for (const ans of payloadAnswers) {
                await AnswerAPI.createAnswer(ans);
            }

            try {
                await SurveyAPI.updateParticipate(survey.survey_id, "plus");
            } catch (e) {
                console.log("참여 수 업데이트 실패", e);
            }

            if (loginUser?.notification_enabled === true) {
                try {
                    const dto = {
                        user_id: Number(loginUser?.user_id),
                        message: "200 마일리지가 지급되었습니다.",
                        notification_type: "MILEAGE",
                    };

                    await NotificationAPI.createNotifications(dto);
                    refreshNotifications();
                } catch (e) {
                    console.log("알림 생성 실패", e);
                }
            }

            try {
                const dto = {
                    user_id: Number(loginUser?.user_id),
                    mileage: 200,
                    reason_detail: "설문조사 참여 마일리지 지급",
                };

                await MileageAPI.addMileage(dto);
            } catch (e) {
                console.log("마일리지 지급 실패", e);
            }

            await init();
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
                    <QuestionRenderer key={q.question_id} question={q} answers={answers} onChange={updateAnswer} isSubmitted={isSubmitted} allAnswers={allAnswers} myAnswers={myAnswers} />
                ))}
            </div>

            <div className="answer-buttons">
                <TextButtonS content="목록으로" onClick={() => navigate(-1)} />
                <TextButtonS content={isSubmitted ? "제출완료" : loading ? "제출 중..." : "제출하기"} type={isSubmitted ? "default" : "hover"} onClick={submit} disabled={loading || isSubmitted} />
            </div>
        </div>
    );
}

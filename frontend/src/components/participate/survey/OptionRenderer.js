import { useEffect, useState } from "react";
import QuestionText from "./QuestionText";
import QuestionRadio from "./QuestionRadio";
import QuestionCheckbox from "./QuestionCheckbox";
import { StatisticAPI } from "../../../api/api";

export default function OptionRenderer({ question, answers, onChange, readOnly }) {
    const type = (question.question_type || "").toUpperCase();
    const questionId = question.question_id;
    const qKey = String(questionId);

    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!readOnly) return;
        if (!(type === "RADIO" || type === "CHECK")) return;

        (async () => {
            try {
                const res = await StatisticAPI.getOptionStats(questionId);
                setStats(res.data || {});
            } catch (e) {
                console.log("통계 로딩 실패", e);
                setStats({});
            }
        })();
    }, [questionId, readOnly, type]);

    switch (type) {
        case "TEXT":
            return <QuestionText questionId={questionId} value={answers[qKey] || ""} onChange={(val) => onChange(qKey, val)} readOnly={readOnly} />;

        case "RADIO":
            return <QuestionRadio questionId={questionId} value={answers[qKey] ?? ""} onChange={(optionId) => onChange(qKey, optionId)} readOnly={readOnly} stats={stats} showStats={readOnly} />;

        case "CHECK":
            return <QuestionCheckbox questionId={questionId} answers={answers} onChange={onChange} readOnly={readOnly} stats={stats} showStats={readOnly} />;

        default:
            return <div className="text-muted small">지원하지 않는 질문 타입입니다. ({question.question_type})</div>;
    }
}

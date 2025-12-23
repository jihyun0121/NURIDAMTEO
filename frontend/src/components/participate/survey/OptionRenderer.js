import QuestionText from "./QuestionText";
import QuestionRadio from "./QuestionRadio";
import QuestionCheckbox from "./QuestionCheckbox";

export default function OptionRenderer({ question, answers, onChange }) {
    const type = (question.question_type || "").toUpperCase();
    const questionId = question.question_id;
    const qKey = String(questionId);

    switch (type) {
        case "TEXT":
            return <QuestionText questionId={questionId} value={answers[qKey] || ""} onChange={(val) => onChange(qKey, val)} />;

        case "RADIO":
            return <QuestionRadio questionId={questionId} value={answers[qKey] ?? ""} onChange={(optionId) => onChange(qKey, optionId)} />;

        case "CHECK":
            return <QuestionCheckbox questionId={questionId} answers={answers} onChange={onChange} />;

        default:
            return <div className="text-muted small">지원하지 않는 질문 타입입니다. ({question.question_type})</div>;
    }
}

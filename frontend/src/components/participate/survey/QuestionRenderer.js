import LabelButton from "../../../ui/button/LabelButton";
import OptionRenderer from "./OptionRenderer";

export default function QuestionRenderer({ question, answers, onChange }) {
    return (
        <div className="question-wrapper">
            <LabelButton content={`질문 ${question.question_order}`} />
            <p className="question-text">{question.question_content}</p>

            <div className="option-container">
                <OptionRenderer question={question} answers={answers} onChange={onChange} />
            </div>
        </div>
    );
}

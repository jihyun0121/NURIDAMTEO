import TextInputBox from "../../../ui/input/TextInputBox";

export default function QuestionShortText({ value, onChange, readOnly }) {
    return <TextInputBox placeholder="답변을 입력하세요" value={value || ""} onChange={(e) => onChange(e.target.value)} readOnly={readOnly} />;
}

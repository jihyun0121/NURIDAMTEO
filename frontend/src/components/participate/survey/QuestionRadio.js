import { useEffect, useState } from "react";
import { SurveyAPI } from "../../../api/api";

export default function QuestionRadio({ questionId, value, onChange }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        loadOptions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionId]);

    async function loadOptions() {
        try {
            const res = await SurveyAPI.getOptionsByQuestion(questionId);
            setOptions(res.data || []);
        } catch (e) {
            console.error("옵션 로드 실패", e);
        }
    }

    return (
        <>
            {options.map((opt) => (
                <div className="option-wrapper " key={opt.option_id}>
                    <input className="radio-box" name={`q_${questionId}`} type="radio" checked={String(value) === String(opt.option_id)} onChange={() => onChange(opt.option_id)}></input>
                    <label className="option-text">{opt.option_content}</label>
                </div>
            ))}
        </>
    );
}

import { useEffect, useState } from "react";
import { SurveyAPI } from "../../../api/api";

export default function QuestionRadio({ questionId, value, onChange, readOnly, stats, showStats }) {
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
            {options.map((opt) => {
                const percent = Number(stats?.[opt.option_id] ?? 0);
                const pctText = `${percent.toFixed(1)}%`;

                return (
                    <div key={opt.option_id}>
                        <div className="option-wrapper">
                            <input className="radio-box" name={`q_${questionId}`} type="radio" checked={String(value) === String(opt.option_id)} readOnly={readOnly} style={{ cursor: `${readOnly && "default"}` }} onChange={() => onChange(opt.option_id)} />
                            <label className="option-text">{opt.option_content}</label>
                        </div>

                        {showStats && (
                            <div className="result-percent">
                                <div
                                    className="percent-bar"
                                    style={{
                                        width: `${percent}%`,
                                    }}
                                />

                                <span className="">{pctText}</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}

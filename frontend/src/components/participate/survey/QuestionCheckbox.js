import { useEffect, useState } from "react";
import { SurveyAPI } from "../../../api/api";
import { colors } from "../../../assets/style/tokens/colors";

export default function QuestionCheckbox({ questionId, answers, onChange, readOnly, stats, showStats }) {
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

    function toggle(optionId) {
        const key = `${questionId}_${optionId}`;
        const current = !!answers[key];
        onChange(key, !current);
    }

    return (
        <>
            {options.map((opt) => {
                const key = `${questionId}_${opt.option_id}`;
                const checked = !!answers[key];

                const percent = Number(stats?.[opt.option_id] ?? 0);
                const pctText = `${percent.toFixed(1)}%`;

                return (
                    <div key={opt.option_id}>
                        <div className="option-wrapper" key={opt.option_id}>
                            <input className="radio-box" type="checkbox" checked={checked} readOnly={readOnly} style={{ cursor: `${readOnly && "default"}` }} onChange={() => toggle(opt.option_id)}></input>
                            <label className="option-text">{opt.option_content}</label>
                        </div>

                        {showStats && (
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                                <div
                                    style={{
                                        width: `${percent}%`,
                                        height: "0.5rem",
                                        background: colors.orange.light.active,
                                        borderRadius: "999px",
                                    }}
                                />
                                <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{pctText}</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}

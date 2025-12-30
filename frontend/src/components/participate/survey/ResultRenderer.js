import { useEffect, useState } from "react";
import { SurveyAPI, StatisticAPI } from "../../../api/api";
import { colors } from "../../../assets/style/tokens/colors";

export default function ResultRenderer({ questionId }) {
    const [options, setOptions] = useState([]);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!questionId) return;

        (async () => {
            try {
                const [optRes, statRes] = await Promise.all([SurveyAPI.getOptionsByQuestion(questionId), StatisticAPI.getOptionStats(questionId)]);

                setOptions(optRes.data || []);
                setStats(statRes.data || {});
            } catch (e) {
                console.log("통계 로딩 실패", e);
                setOptions([]);
                setStats({});
            }
        })();
    }, [questionId]);

    if (stats === null) return <div style={{ marginTop: "1rem" }}>로딩중...</div>;

    return (
        <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            <div style={{ fontWeight: 600, marginBottom: "0.75rem" }}>선택 비율</div>

            {options.map((opt) => {
                const percent = Number(stats?.[opt.option_id] ?? 0);
                const pctText = `${percent.toFixed(1)}%`;

                return (
                    <div key={opt.option_id} style={{ marginBottom: "0.75rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                            <span>{opt.option_content}</span>
                            <span>{pctText}</span>
                        </div>

                        <div style={{ height: "8px", background: "var(--gray-light)", borderRadius: "999px", overflow: "hidden" }}>
                            <div
                                style={{
                                    width: `${percent}%`,
                                    height: "100%",
                                    background: colors.orange.light.active,
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

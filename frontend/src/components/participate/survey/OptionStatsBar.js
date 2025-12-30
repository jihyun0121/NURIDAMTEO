import { useEffect, useState } from "react";
import { SurveyAPI, StatisticAPI } from "../../../api/api";

export default function OptionStatsBar({ question }) {
    const [options, setOptions] = useState([]);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!question.question_id) return;
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [question.question_id]);

    console.log("OptionStatsBar questionId:", question.question_id);

    async function load() {
        try {
            const [optRes, statRes] = await Promise.all([SurveyAPI.getOptionsByQuestion(question.question_id), StatisticAPI.getOptionStats(question.question_id)]);

            console.log(optRes.data, statRes.data);
            setOptions(optRes.data || []);
            setStats(statRes.data || {});
        } catch (e) {
            console.log("통계 로딩 실패", e);
            setOptions([]);
            setStats({});
        }
    }

    if (!stats) return <div style={{ marginTop: "1rem" }}>로딩중...</div>;

    return (
        <div style={{}}>
            {options.map((opt) => {
                const percent = Number(stats?.[opt.option_id] ?? 0);
                const pctText = `${percent.toFixed(1)}%`;

                return (
                    <div key={opt.option_id} style={{}}>
                        <div style={{}}>
                            <span>{opt.option_content}</span>
                        </div>

                        <div style={{}}>
                            <div style={{ width: `${percent}%`, height: "100%", background: "var(--primary)" }} />
                            <span>{pctText}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

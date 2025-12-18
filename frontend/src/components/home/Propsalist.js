import { useEffect, useState } from "react";
import { SuggestionAPI } from "../../api/api";
import NuridamIcon from "../../ui/icons/NuridamIcon";
import { colors } from "../../assets/style/tokens/colors";
import PropsalCard from "./PropsalCard";

export default function PropsalList() {
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        async function loadSuggestion() {
            try {
                const res = await SuggestionAPI.getSuggestions(0);

                const filtered = res.data
                    .filter((item) => item.status === "OPEN")
                    .filter((item) => new Date(item.end_at) > new Date())
                    .sort((a, b) => b.like_count - a.like_count)
                    .slice(0, 4)
                    .map((item, index) => ({
                        ...item,
                        isBest: index === 0,
                    }));

                setSuggestion(filtered);
            } catch (err) {
                console.log("제안 로딩 실패", err);
            }
        }

        loadSuggestion();
    }, []);

    return (
        <div className="propsal-list-container">
            <div className="propsal-list-title">
                <NuridamIcon type="sodam" size={64} />
                <div>
                    <span style={{ color: colors.orange.normal.hover }}>토론에 참여</span>하고 누리소담시에게<span style={{ color: colors.orange.normal.hover }}>의견을 들려주세요!</span>
                </div>
            </div>

            <div className="propsal-list-cards">
                {suggestion.map((suggestion, index) => (
                    <div key={index} className="propsal-list-card">
                        <PropsalCard type="light" suggestion={suggestion} />
                    </div>
                ))}
            </div>
        </div>
    );
}

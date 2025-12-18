import { colors } from "../../assets/style/tokens/colors";
import LabelButton from "../../ui/button/LabelButton";
import HeartIcon from "../../ui/icons/HeartIcon";
import ChatIcon from "../../ui/icons/ChatIcon";

export default function PropsalCard({ type = "default", suggestion }) {
    let state = suggestion.status;
    let content;
    let color;

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const getRemainDays = (end_at) => {
        const now = new Date();
        const end = new Date(end_at);
        return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    };
    if (state === "WAIT") {
        content = "대기중";
        color = "gray";
    } else if (state === "OPEN") {
        content = "토론중";
        color = "red";
    } else if (state === "ANSWER") {
        content = "답변대기";
        color = "gray";
    } else if (state === "ADOPTED") {
        content = "채택";
        color = "primary";
    } else if (state === "REFUSAL") {
        content = "미채택";
        color = "gray";
    }
    return (
        <div className="propsal-card-container" style={{ borderColor: `${type === "light" ? colors.orange.normal.base : colors.gray.light.active}` }}>
            <div className="propsal-card-header">
                <div className="propsal-card-state">
                    <LabelButton content={content} type={color} />
                    {suggestion.isBest && <LabelButton content="BEST 공감" type="fill" />}
                </div>
                <div className="propsal-card-date">종료 {getRemainDays(suggestion.end_at)}일 전</div>
            </div>

            <div className="propsal-card-content">
                <div className="propsal-card-title">{suggestion.title}</div>
                <div className="propsal-card-text">{stripHtml(suggestion.content)}</div>
            </div>

            <div className="propsal-card-footer">
                <HeartIcon size={44} type={type === "light" ? "hover" : "fill"} /> {suggestion.view_count}
                <ChatIcon size={44} type={type === "light" ? "hover" : "fill"} /> {suggestion.participation_count}
            </div>
        </div>
    );
}

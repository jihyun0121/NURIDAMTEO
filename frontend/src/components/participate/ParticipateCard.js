import { colors } from "../../assets/style/tokens/colors";
import LabelButton from "../../ui/button/LabelButton";
import ChatIcon from "../../ui/icons/ChatIcon";
import VoteIcon from "../../ui/icons/VoteIcon";

export default function ParticipateCard({ type = "default", participate }) {
    let state = participate.status;
    let content;
    let color;

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const getRemainDays = (end_at) => {
        const now = new Date();
        const end = new Date(end_at);
        let day = Math.ceil((end - now) / (1000 * 60 * 60 * 24));

        if (day <= 0) day = 0;
        return day;
    };
    if (state === "WAIT") {
        content = "대기중";
        color = "gray";
    } else if (state === "OPEN") {
        content = "진행중";
        color = "red";
    } else if (state === "CLOSE") {
        content = "조사 종료";
        color = "gray";
    }

    return (
        <div className="participate-card-container" style={{ borderColor: `${type === "light" ? colors.orange.normal.base : colors.gray.light.active}` }}>
            <div className="participate-card-header">
                <div className="participate-card-state">
                    <LabelButton content={content} type={color} />
                    {participate.survey_type === "PANEL" && <LabelButton content="선정조사" type="red" />}
                </div>
                <div className="participate-card-date">종료 {getRemainDays(participate.end_at)}일 전</div>
            </div>

            <div className="participate-card-content">
                <div className="participate-card-title">{participate.title}</div>
                <div className="participate-card-text">{stripHtml(participate.description)}</div>
            </div>

            <div className="participate-card-footer">
                <VoteIcon size={44} variant="line" type={type === "light" ? "hover" : "fill"} /> {participate.view_count}
                <ChatIcon size={44} type={type === "light" ? "hover" : "fill"} /> {participate.participation_count}
            </div>
        </div>
    );
}

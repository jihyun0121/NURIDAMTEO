import { SurveyAPI } from "../../api/api";
import { colors } from "../../assets/style/tokens/colors";
import LabelButton from "../../ui/button/LabelButton";
import ChatIcon from "../../ui/icons/ChatIcon";
import VoteIcon from "../../ui/icons/VoteIcon";

export default function ParticipateCard({ type = "default", survey, participate }) {
    let state = survey.status;
    let content;
    let color;

    const hasParticipated = participate.some((p) => p.target_id === survey.survey_id);

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
        if (hasParticipated) {
            content = "참여완료";
            color = "green";
        } else {
            content = "진행중";
            color = "red";
        }
    } else if (state === "CLOSE") {
        content = "조사종료";
        color = "gray";
    }

    const addViewCount = (s) => {
        const res = SurveyAPI.updateView(s);
        console.log(res);
    };

    return (
        <div
            className="participate-card-container"
            style={{ borderColor: `${type === "light" ? colors.orange.normal.base : colors.gray.light.active}` }}
            onClick={() => {
                addViewCount(survey.survey_id);
                window.location.href = `/participate/${survey.survey_id}`;
            }}
        >
            <div className="participate-card-header">
                <div className="participate-card-state">
                    <LabelButton content={content} type={color} />
                    {survey.survey_type === "PANEL" && <LabelButton content="선정조사" type="red" />}
                </div>
                <div className="participate-card-date">종료 {getRemainDays(survey.end_at)}일 전</div>
            </div>

            <div className="participate-card-content">
                <div className="participate-card-title">{survey.title}</div>
                <div className="participate-card-text">{stripHtml(survey.description)}</div>
            </div>

            <div className="participate-card-footer">
                <VoteIcon size={44} variant="line" type={type === "light" ? "hover" : "fill"} /> {survey.participation_count}
                <ChatIcon size={44} type={type === "light" ? "hover" : "fill"} /> {survey.participation_count}
            </div>
        </div>
    );
}

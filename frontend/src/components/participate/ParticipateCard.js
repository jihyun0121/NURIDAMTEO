import { useEffect, useState } from "react";
import { CommentAPI, SurveyAPI } from "../../api/api";
import { colors } from "../../assets/style/tokens/colors";
import LabelButton from "../../ui/button/LabelButton";
import ChatIcon from "../../ui/icons/ChatIcon";
import VoteIcon from "../../ui/icons/VoteIcon";

export default function ParticipateCard({ type = "default", survey, participate }) {
    let state = survey.status;
    let content;
    let color;

    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        const fetchCommentCount = async () => {
            if (!survey?.survey_id) return;

            try {
                const res = await CommentAPI.getComments("SURVEY", survey.survey_id);
                setCommentCount(res?.data?.length || 0);
            } catch (e) {
                console.log("댓글 개수 불러오기 실패", e);
                setCommentCount(0);
            }
        };

        fetchCommentCount();
    }, [survey?.survey_id, survey?.survey_type]);

    const hasParticipated = participate.some((p) => p.target_id === survey.survey_id && (p.target_type === "SURVEY" || p.target_type === "PANEL" || p.target_type === "SELECT"));

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
        SurveyAPI.updateView(s);
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
                    {survey.survey_type === "SELECT" && <LabelButton content="선정조사" type="red" />}
                </div>
                <div className="participate-card-date">종료 {getRemainDays(survey.end_at)}일 전</div>
            </div>

            <div className="participate-card-content">
                <div className="participate-card-title">{survey.title}</div>
                <div className="participate-card-text">{stripHtml(survey.description)}</div>
            </div>

            <div className="participate-card-footer">
                <VoteIcon size={44} variant="line" type={type === "light" || hasParticipated ? "hover" : "fill"} /> {survey.participation_count}
                {survey.survey_type === "SURVEY" && (
                    <>
                        <ChatIcon size={44} type={type === "light" || hasParticipated ? "hover" : "fill"} /> {commentCount}
                    </>
                )}
            </div>
        </div>
    );
}

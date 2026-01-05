import { CommentAPI, ParticipationAPI, ProposalAPI } from "../../api/api";
import { useEffect, useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import ChatIcon from "../../ui/icons/ChatIcon";
import LabelButton from "../../ui/button/LabelButton";
import HeartIcon from "../../ui/icons/HeartIcon";

export default function ProposalCard({ type = "default", proposal }) {
    const [participations, setParticipations] = useState([]);
    const [hasParticipated, setHasParticipated] = useState(false);

    let state = proposal.status;
    let content;
    let color;
    const loginUser = Number(sessionStorage.getItem("user_id"));

    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        const fetchCommentCount = async () => {
            if (!proposal?.proposal_id) return;

            try {
                const res = await CommentAPI.getComments("PROPOSAL", proposal.proposal_id);
                setCommentCount(res.data?.length || 0);
            } catch {
                setCommentCount(0);
            }
        };

        fetchCommentCount();
    }, [proposal?.proposal_id]);

    useEffect(() => {
        const fetchMyParticipations = async () => {
            if (!loginUser) return;

            try {
                const res = await ParticipationAPI.getUserParticipaiton(loginUser);
                setParticipations(res.data || []);
            } catch (err) {
                console.log("유저 참여 목록 로딩 실패", err);
                setParticipations([]);
            }
        };

        fetchMyParticipations();
    }, [loginUser]);

    useEffect(() => {
        if (!proposal) return;

        let targetId = null;
        let targetType = null;

        targetId = proposal?.proposal_id;
        targetType = "PROPOSAL";

        if (!targetId || !targetType) return;

        const participated = participations.some((p) => p.target_id === targetId && p.target_type === targetType);
        setHasParticipated(participated);
    }, [proposal, participations]);

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

    const addViewCount = (p) => {
        ProposalAPI.updateView(p);
    };

    return (
        <div
            className="proposal-card-container"
            style={{ borderColor: `${type === "light" ? colors.orange.normal.base : colors.gray.light.active}` }}
            onClick={() => {
                addViewCount(proposal.proposal_id);
                window.location.href = `/proposal/${proposal.proposal_id}`;
            }}
        >
            <div className="proposal-card-header">
                <div className="proposal-card-state">
                    <LabelButton content={content} type={color} />
                    {proposal.isBest && <LabelButton content="BEST 공감" type="fill" />}
                </div>
                <div className="proposal-card-date">종료 {getRemainDays(proposal.end_at)}일 전</div>
            </div>

            <div className="proposal-card-content">
                <div className="proposal-card-title">{proposal.title}</div>
                <div className="proposal-card-text">{stripHtml(proposal.content)}</div>
            </div>

            <div className="proposal-card-footer">
                <HeartIcon size={44} type={type === "light" || hasParticipated ? "hover" : "fill"} /> {proposal.participation_count}
                <ChatIcon size={44} type={type === "light" || hasParticipated ? "hover" : "fill"} /> {commentCount}
            </div>
        </div>
    );
}

import { colors } from "../../assets/style/tokens/colors";
import LabelButton from "../../ui/button/LabelButton";
import HeartIcon from "../../ui/icons/HeartIcon";
import ChatIcon from "../../ui/icons/ChatIcon";

export default function ProposalCard({ type = "default", proposal }) {
    let state = proposal.status;
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
        <div className="proposal-card-container" style={{ borderColor: `${type === "light" ? colors.orange.normal.base : colors.gray.light.active}` }} onClick={() => (window.location.href = `/nurisodam/result/${proposal.proposal_id}`)}>
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
                <HeartIcon size={44} type={type === "light" ? "hover" : "fill"} /> {proposal.view_count}
                <ChatIcon size={44} type={type === "light" ? "hover" : "fill"} /> {proposal.participation_count}
            </div>
        </div>
    );
}

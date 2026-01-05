import AuthButton from "../../ui/button/AuthButton";
import SurveyList from "./SurveyList";
import { colors } from "../../assets/style/tokens/colors";
import { useEffect, useState } from "react";
import { BookmarkAPI, NoticeAPI, ProposalAPI, ResultAPI } from "../../api/api";

export default function ProfileDetail({ mileage = 0, type = "coin" }) {
    const [proposal, setProposal] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    let content = null;
    let style = null;

    const userId = Number(sessionStorage.getItem("user_id"));

    mileage = mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await ProposalAPI.getUserProposal(userId);
                const proList = res.data.slice(0, 2);
                console.log(proList);
                setProposal(proList);
            } catch (e) {
                console.log("제안 불러오기 실패", e);
            }
        }
        fetchUser();
    }, [userId]);

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await BookmarkAPI.getBookmarkUser(userId);
                const bookList = res.data.slice(0, 2);
                const enriched = await Promise.all(
                    bookList.map(async (item) => {
                        try {
                            let detail = null;

                            if (item.proposal_id) {
                                detail = await ProposalAPI.getProposal(item.proposal_id);
                            } else if (item.result_id) {
                                detail = await ResultAPI.getResult(item.result_id);
                            } else if (item.notice_id) {
                                detail = await NoticeAPI.getDetail(item.notice_id);
                            }
                            return { ...item, ...detail?.data };
                        } catch (e) {
                            console.log("북마크 상세 조회 실패:", item, e);
                            return { ...item, ...null };
                        }
                    })
                );

                console.log(enriched);
                setBookmark(enriched);
            } catch (e) {
                console.log("북마크 불러오기 실패", e);
            }
        }

        fetchUser();
    }, [userId]);

    if (type === "none") {
        style = { backgroundColor: colors.white, display: "none" };
    } else if (type === "coin") {
        content = (
            <>
                <div className="mileage-header">
                    <div>보유 마일리지</div>
                    <div className="mileage-text">{mileage} M</div>
                </div>
                <div className="mileage-menu">
                    <AuthButton content="페이 전환" type="line" />
                    <AuthButton content="상품권 신청" type="line" />
                    <AuthButton content="기부 신청" type="line" />
                </div>
                <div className="nav-text" onClick={() => (window.location.href = "/my")}>
                    내역 보기
                </div>
            </>
        );
        style = {
            borderRadius: "0 1.5rem 1.5rem 1.5rem",
        };
    } else if (type === "vote") {
        content = (
            <>
                {proposal.map((proposal, index) => (
                    <SurveyList type="default" num={index + 1} title={proposal.title} state={proposal.status} />
                ))}
                <div className="nav-text" onClick={() => (window.location.href = "/my?type=proposal")}>
                    전체 보기
                </div>
            </>
        );
        style = { gap: "0.5rem", borderRadius: "1.5rem" };
    } else if (type === "bookmark") {
        content = (
            <>
                {bookmark.map((bookmark, index) => (
                    <SurveyList num={index + 1} title={bookmark.title || bookmark.result_title} />
                ))}
                <div className="nav-text" onClick={() => (window.location.href = "/my?type=bookmark")}>
                    전체 보기
                </div>
            </>
        );
        style = { gap: "0.5rem", borderRadius: "1.5rem 0 1.5rem 1.5rem" };
    }
    return (
        <>
            <div className="profile-card-detail" style={{ ...style }}>
                {content}
            </div>
        </>
    );
}

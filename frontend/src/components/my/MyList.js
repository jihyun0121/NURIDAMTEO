import { useEffect, useState } from "react";
import { ProposalAPI, ParticipationAPI, BookmarkAPI, SurveyAPI, ResultAPI, MileageAPI } from "../../api/api";
import { colors } from "../../assets/style/tokens/colors";
import MileageStatus from "./MileageStatus";
import SurveyList from "../home/SurveyList";

export default function MyList({ title, asc, desc, type = "mileage", userId }) {
    const [list, setList] = useState([]);
    const [sortType, setSortType] = useState("desc");
    const [bookmarkType, setBookmarkType] = useState("proposal");

    useEffect(() => {
        if (!userId) return;

        async function fetchList() {
            try {
                let res;

                if (type === "propsal") {
                    res = await ProposalAPI.getUserProposal(userId);
                    setList(res.data);
                    return;
                }

                if (type === "participate") {
                    res = await ParticipationAPI.getUserParticipaiton(userId);

                    const enriched = await Promise.all(
                        res.data.map(async (item) => {
                            try {
                                let detail = null;

                                if (item.target_type === "PROPOSAL") detail = await ProposalAPI.getProposal(item.target_id);
                                else if (item.target_type === "SURVEY" || item.target_type === "PANEL") detail = await SurveyAPI.getSurvey(item.target_id);

                                return { ...item, ...detail?.data };
                            } catch (e) {
                                console.log("참여 상세 조회 실패:", item, e);
                                return { ...item, ...null };
                            }
                        })
                    );

                    setList(enriched);
                    return;
                }

                if (type === "bookmark") {
                    if (bookmarkType === "proposal") res = await BookmarkAPI.getBookmarkProposal(userId);
                    else res = await BookmarkAPI.getBookmarkResult(userId);

                    const enriched = await Promise.all(
                        res.data.map(async (item) => {
                            try {
                                let detail = null;

                                if (item.proposal_id) {
                                    detail = await ProposalAPI.getProposal(item.proposal_id);
                                } else if (item.result_id) {
                                    detail = await ResultAPI.getResult(item.result_id);
                                }

                                return { ...item, ...detail?.data };
                            } catch (e) {
                                console.log("북마크 상세 조회 실패:", item, e);
                                return { ...item, ...null };
                            }
                        })
                    );

                    setList(enriched);
                    return;
                }

                if (type === "mileage") {
                    res = await MileageAPI.getMileageHistory(userId);
                    console.log(res.data);
                    setList(res.data);
                    return;
                }

                setList([]);
            } catch (e) {
                console.log("목록 불러오기 실패", e);
            }
        }

        fetchList();
    }, [type, userId, bookmarkType]);

    const sortedList = (() => {
        if (type === "propsal" || type === "participate" || type === "mileage") {
            const copied = [...list];
            return copied.sort((a, b) => {
                const dateA = new Date(a.created_at);
                const dateB = new Date(b.created_at);
                return sortType === "asc" ? dateA - dateB : dateB - dateA;
            });
        }
        return list;
    })();

    const getRouteInfo = (item) => {
        if (type === "propsal") {
            return { page: "proposal", id: item.proposal_id || item.proposalId };
        }

        if (type === "participate") {
            if (item.target_type === "PROPOSAL") return { page: "proposal", id: item.target_id };
            if (item.target_type === "SURVEY" || item.target_type === "PANEL") return { page: "participate", id: item.target_id };
        }

        if (type === "bookmark") {
            if (bookmarkType === "proposal") return { page: "proposal", id: item.proposal_id };
            if (bookmarkType === "result") return { page: "nurisodam/result", id: item.result_id };
        }

        return { page: "", id: null };
    };

    return (
        <div className="my-list-container">
            <div className="my-list-title">
                <p>{title}</p>

                <div className="my-list-sort-btn">
                    {type === "bookmark" ? (
                        <>
                            <p onClick={() => setBookmarkType("proposal")} style={{ color: bookmarkType === "proposal" ? colors.orange.normal.base : colors.gray.normal.base }}>
                                {asc}
                            </p>
                            <p onClick={() => setBookmarkType("result")} style={{ color: bookmarkType === "result" ? colors.orange.normal.base : colors.gray.normal.base }}>
                                {desc}
                            </p>
                        </>
                    ) : (
                        <>
                            <p onClick={() => setSortType("asc")} style={{ color: sortType === "asc" ? colors.orange.normal.base : colors.gray.normal.base }}>
                                {asc}
                            </p>
                            <p onClick={() => setSortType("desc")} style={{ color: sortType === "desc" ? colors.orange.normal.base : colors.gray.normal.base }}>
                                {desc}
                            </p>
                        </>
                    )}
                </div>
            </div>

            <div className="my-list">
                {type === "mileage"
                    ? sortedList.map((s, i) => <MileageStatus key={s.mileage_id || i} num={i + 1} title={s.reason_detail} date={s.created_at} total={s.total_mileage} mileage={s.mileage} />)
                    : sortedList.map((s, i) => {
                          const { page, id } = getRouteInfo(s);
                          return <SurveyList key={s.bookmark_id || s.participation_id || s.proposal_id || i} num={i + 1} size="long" title={s.title || s.result_title} start={s.start_at} end={s.end_at} type={s.status ? "default" : "none"} state={s.status} onClick={() => page && id && (window.location.href = `/${page}/${id}`)} />;
                      })}
            </div>
        </div>
    );
}

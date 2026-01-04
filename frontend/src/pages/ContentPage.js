import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NoticeAPI, ProposalAPI, UserAPI, ResultAPI, SurveyAPI, ParticipationAPI, BookmarkAPI, CommentAPI, NotificationAPI, MileageAPI } from "../api/api";
import { useNotificationRefresh } from "../components/proposal/NotificationContext";
import Header from "../components/Header";
import participateBanner from "../assets/image/participate/participatebanner.svg";
import proposalBanner from "../assets/image/proposal/proposalbanner.svg";
import noticeBanner from "../assets/image/nurisodam/banner.svg";
import AnswerForm from "../components/participate/survey/AnswerForm";
import EyeIcon from "../ui/icons/EyeIcon";
import HeartIcon from "../ui/icons/HeartIcon";
import TextButtonS from "../ui/button/TextButtonS";
import LabelButton from "../ui/button/LabelButton";
import Comment from "../components/Comment";
import MegaphoneIcon from "../ui/icons/MegaphoneIcon";
import useResults from "../components/nurisodam/hook/useResults";
import useNotices from "../components/nurisodam/hook/useNotice";
import useNews from "../components/nurisodam/hook/useNews";

export default function ContentPage() {
    const navigate = useNavigate();
    const [contents, setContents] = useState(null);
    const [user, setUser] = useState(null);
    const [loginUser, setLoginUser] = useState(null);
    const [state, setState] = useState(false);
    const [participations, setParticipations] = useState([]);
    const [hasParticipated, setHasParticipated] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);
    const [isLiking, setIsLiking] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");
    const [commentLoading, setCommentLoading] = useState(false);
    const { results } = useResults();
    const { notices } = useNotices();
    const { news } = useNews();
    const [nextResult, setNextResult] = useState(null);
    const [nextNotice, setNextNotice] = useState(null);
    const [nextNews, setNextNews] = useState(null);
    const { refreshNotifications } = useNotificationRefresh();

    const location = useLocation();
    const pathname = location.pathname;
    const params = useParams();
    const userId = sessionStorage.getItem("user_id");

    const pageType = useMemo(() => {
        if (pathname.startsWith("/participate")) return "participate";
        if (pathname.startsWith("/proposal")) return "proposal";
        if (pathname.startsWith("/nurisodam/result")) return "result";
        if (pathname.startsWith("/nurisodam/news") || pathname.startsWith("/nurisodam/notice")) return "notice";
        return "unknown";
    }, [pathname]);

    const categoryName = useMemo(() => {
        const map = {
            1: "복지·교육",
            2: "교통·환경",
            3: "행정·민원",
            4: "안전·재난",
            5: "경제·상권",
            6: "문화·관광",
            7: "청년·일자리",
        };
        return contents?.category_id ? map[contents?.category_id] : null;
    }, [contents?.category_id]);

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await UserAPI.getUser(userId);
                setLoginUser(res.data);
            } catch (e) {
                console.log("유저 정보 불러오기 실패", e);
            }
        }
        fetchUser();
    }, [userId]);

    useEffect(() => {
        const fetchMyParticipations = async () => {
            if (!loginUser?.user_id) return;

            try {
                const res = await ParticipationAPI.getUserParticipaiton(loginUser?.user_id);
                setParticipations(res.data || []);
            } catch (err) {
                console.log("유저 참여 목록 로딩 실패", err);
                setParticipations([]);
            }
        };

        fetchMyParticipations();
    }, [loginUser?.user_id]);

    useEffect(() => {
        if (!contents) return;

        let targetId = null;
        let targetType = null;

        if (pageType === "participate") {
            targetId = contents?.survey_id;
            targetType = "SURVEY";
        } else if (pageType === "proposal") {
            targetId = contents?.proposal_id;
            targetType = "PROPOSAL";
        }

        if (!targetId || !targetType) return;

        const participated = participations.some((p) => p.target_id === targetId && p.target_type === targetType);
        setHasParticipated(participated);
    }, [contents, participations, pageType]);

    useEffect(() => {
        const fetchData = async () => {
            setContents(null);
            setUser(null);

            if (pageType === "unknown") return;
            try {
                if (pageType === "participate") {
                    const surveyRes = await SurveyAPI.getSurvey(params.surveyId);
                    const survey = surveyRes.data;

                    setContents(survey);
                    setState(survey.status);
                } else if (pageType === "proposal") {
                    const proposalRes = await ProposalAPI.getProposal(params.proposalId);
                    const proposal = proposalRes.data;
                    setContents(proposal);
                    setState(proposal.status);

                    const userRes = await UserAPI.getUser(proposal.user_id);
                    setUser(userRes.data);
                } else if (pageType === "notice") {
                    const res = await NoticeAPI.getDetail(params.noticeId);
                    setContents(res.data);
                } else if (pageType === "result") {
                    const res = await ResultAPI.getResult(params.resultId);
                    setContents(res.data);
                }
            } catch (err) {
                console.log("콘텐츠 로딩 실패", err);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageType, params.surveyId, params.proposalId, params.noticeId, params.resultId]);

    useEffect(() => {
        const fetchMyBookmarks = async () => {
            if (!loginUser?.user_id) return;

            try {
                if (pageType === "proposal" && contents?.proposal_id) {
                    const res = await BookmarkAPI.getBookmarkProposal(loginUser?.user_id);
                    const list = res.data || [];
                    setBookmarks(list);

                    const bookmarked = list.some((b) => b.proposal_id === contents?.proposal_id);
                    setIsBookmarked(bookmarked);
                } else if (pageType === "result" && contents?.result_id) {
                    const res = await BookmarkAPI.getBookmarkResult(loginUser?.user_id);
                    const list = res.data || [];
                    setBookmarks(list);

                    const bookmarked = list.some((b) => b.result_id === contents?.result_id);
                    setIsBookmarked(bookmarked);
                }
            } catch (e) {
                console.log("북마크 목록 불러오기 실패", e);
                setBookmarks([]);
                setIsBookmarked(false);
            }
        };

        fetchMyBookmarks();
    }, [loginUser?.user_id, pageType, contents?.proposal_id, contents?.result_id]);

    useEffect(() => {
        const fetchComments = async () => {
            const { targetType, targetId } = getCommentTarget();
            if (!targetType || !targetId) return;

            try {
                const res = await CommentAPI.getComments(targetType, targetId);
                setComments(res.data || []);
            } catch (e) {
                console.log("댓글 불러오기 실패", e);
                setComments([]);
            }
        };

        fetchComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageType, contents?.proposal_id, contents?.survey_id]);

    useEffect(() => {
        if (pageType !== "result") return;
        if (!contents?.result_id) return;
        if (!results.length) return;

        const idx = results.findIndex((r) => Number(r.result_id) === Number(contents?.result_id));
        if (idx === -1) return;

        setNextResult(results[idx + 1] || null);
    }, [pageType, contents?.result_id, results]);

    useEffect(() => {
        if (pageType !== "notice") return;
        if (!contents?.notice_id) return;
        if (!notices.length) return;

        const idx = notices.findIndex((n) => Number(n.notice_id) === Number(contents?.notice_id));
        if (idx === -1) return;

        setNextNotice(notices[idx + 1] || null);
    }, [pageType, contents?.notice_id, notices]);

    useEffect(() => {
        if (pageType !== "news") return;
        if (!contents?.notice_id) return;
        if (!news.length) return;

        const idx = news.findIndex((n) => Number(n.notice_id) === Number(contents?.notice_id));
        if (idx === -1) return;

        setNextNews(news[idx + 1] || null);
    }, [pageType, contents?.notice_id, news]);

    let banner = null;
    let title = null;
    let content = null;
    let form = null;
    let comment = null;
    let color = null;
    let text = null;

    const maskName = (name) => {
        if (!name) return "";
        const len = name.length;
        if (len <= 1) return name;
        if (len === 2) return name.charAt(0) + "*";
        return name.charAt(0) + "*".repeat(name.length - 2) + name.charAt(name.length - 1);
    };

    const normalizeDay = (input) => {
        if (!input) return "";

        const digits = input.replace(/\D/g, "");

        if (digits.length !== 8) return "";

        const year = digits.slice(0, 4);
        const month = digits.slice(4, 6);
        const day = digits.slice(6, 8);

        return `${year}.${month}.${day}`;
    };

    const handleLike = async () => {
        if (!contents) return;
        if (!loginUser?.user_id) return;

        if (hasParticipated) return;
        if (isLiking) return;

        try {
            setIsLiking(true);

            const dto = {
                user_id: Number(loginUser?.user_id),
                target_type: "PROPOSAL",
                target_id: contents?.proposal_id,
                participation_type: "LIKE",
            };

            const res = await ParticipationAPI.createParticipaiton(dto);

            await ProposalAPI.updateParticipate(contents?.proposal_id, "plus");
            setHasParticipated(true);

            if (res?.data) {
                setParticipations((prev) => [...prev, res.data]);
            } else {
                const fresh = await ParticipationAPI.getUserParticipaiton(loginUser?.user_id);
                setParticipations(fresh.data || []);
            }
        } catch (e) {
            console.log("공감 처리 실패", e);
        } finally {
            setIsLiking(false);
        }

        if (contents?.user_id && contents.user_id !== Number(loginUser?.user_id)) {
            if (user?.notification_enabled === true) {
                try {
                    const dto = {
                        user_id: contents?.user_id,
                        proposal_id: contents?.proposal_id,
                        message: "회원님의 제안에 새로운 공감이 달렸습니다",
                        notification_type: "LIKE",
                    };

                    await NotificationAPI.createNotifications(dto);
                    refreshNotifications();
                } catch (e) {
                    console.log("알림 생성 실패", e);
                }
            }

            if (loginUser?.notification_enabled === true) {
                try {
                    const dto = {
                        user_id: Number(loginUser?.user_id),
                        message: "20 마일리지가 지급되었습니다.",
                        notification_type: "MILEAGE",
                    };

                    await NotificationAPI.createNotifications(dto);
                    refreshNotifications();
                } catch (e) {
                    console.log("알림 생성 실패", e);
                }
            }

            try {
                const dto = {
                    user_id: Number(loginUser?.user_id),
                    mileage: 20,
                    reason_detail: "제안 공감 마일리지 지급",
                };

                await MileageAPI.addMileage(dto);
            } catch (e) {
                console.log("마일리지 지급 실패", e);
            }
        }
    };

    const handleBookmark = async () => {
        if (!contents) return;
        if (!loginUser?.user_id) return;

        const isProposal = pageType === "proposal";
        const isResult = pageType === "result";

        if (!isProposal && !isResult) return;

        const targetId = isProposal ? contents?.proposal_id : contents?.result_id;
        if (!targetId) return;

        if (isBookmarked) {
            const target = bookmarks.find((b) => (isProposal ? b.proposal_id === targetId : b.result_id === targetId));
            if (!target) return;

            await BookmarkAPI.deleteBookmark(target.bookmark_id);

            setBookmarks((prev) => prev.filter((b) => b.bookmark_id !== target.bookmark_id));
            setIsBookmarked(false);
            return;
        }

        const dto = {
            user_id: Number(loginUser?.user_id),
            proposal_id: isProposal ? targetId : null,
            result_id: isResult ? targetId : null,
        };

        await BookmarkAPI.createBookmark(dto);

        const fresh = isProposal ? await BookmarkAPI.getBookmarkProposal(loginUser?.user_id) : await BookmarkAPI.getBookmarkResult(loginUser?.user_id);

        const list = fresh.data || [];
        setBookmarks(list);
        setIsBookmarked(true);
    };

    const getCommentTarget = () => {
        if (pageType === "proposal" && contents?.proposal_id) {
            return { targetType: "PROPOSAL", targetId: contents?.proposal_id };
        }
        if (pageType === "participate" && contents?.survey_id) {
            return { targetType: "SURVEY", targetId: contents?.survey_id };
        }
        return { targetType: null, targetId: null };
    };

    const handleCreateComment = async () => {
        if (!loginUser?.user_id) return alert("로그인이 필요합니다.");
        if (!commentInput.trim()) return;

        const { targetType, targetId } = getCommentTarget();
        if (!targetType || !targetId) return;

        try {
            setCommentLoading(true);

            const dto = {
                user_id: Number(loginUser?.user_id),
                target_type: targetType,
                target_id: targetId,
                content: commentInput,
            };

            await CommentAPI.createComment(dto);

            setCommentInput("");

            const fresh = await CommentAPI.getComments(targetType, targetId);
            setComments(fresh.data || []);
        } catch (e) {
            console.log("댓글 등록 실패", e);
        } finally {
            setCommentLoading(false);
        }

        if (contents?.user_id && contents.user_id !== Number(loginUser?.user_id)) {
            if (user?.notification_enabled === true) {
                try {
                    const dto = {
                        user_id: contents?.user_id,
                        proposal_id: contents?.proposal_id,
                        message: "회원님의 제안에 새로운 댓글이 달렸습니다",
                        notification_type: "COMMENT",
                    };

                    await NotificationAPI.createNotifications(dto);
                    refreshNotifications();
                } catch (e) {
                    console.log("알림 생성 실패", e);
                }
            }


            if (loginUser?.notification_enabled === true) {
                try {
                    const dto = {
                        user_id: Number(loginUser?.user_id),
                        message: "50 마일리지가 지급되었습니다.",
                        notification_type: "MILEAGE",
                    };

                    await NotificationAPI.createNotifications(dto);
                    refreshNotifications();
                } catch (e) {
                    console.log("알림 생성 실패", e);
                }
            }

            try {
                const dto = {
                    user_id: Number(loginUser?.user_id),
                    mileage: 50,
                    reason_detail: "댓글 작성 마일리지 지급",
                };

                await MileageAPI.addMileage(dto);
            } catch (e) {
                console.log("마일리지 지급 실패", e);
            }
        }
    };

    const addViewCount = (r) => {
        if (pageType === "participate") {
        } else if (pageType === "proposal") {
        } else if (pageType === "notice") {
            NoticeAPI.updateView(r);
        } else if (pageType === "news") {
            NoticeAPI.updateView(r);
        } else if (pageType === "result") {
            ResultAPI.updateView(r);
        }
    };

    if (pageType === "participate") {
        if (state === "WAIT") {
            text = "대기중";
            color = "gray";
        } else if (state === "OPEN") {
            if (contents?.survey_type === "PANEL") {
                text = "선정조사";
                color = "red";
            } else {
                text = "진행중";
                color = "red";
            }
        } else if (state === "CLOSE") {
            text = "조사종료";
            color = "gray";
        }

        banner = participateBanner;
        title = (
            <div className="content-title-container">
                {contents?.title}
                <div className="content-author-text">
                    <p>{contents?.author}</p>
                    {normalizeDay(contents?.start_at)} ~ {normalizeDay(contents?.end_at)}
                </div>
                <div className="content-data-container">
                    <div className="content-data-text">
                        <LabelButton content={text} type={color} />
                        {hasParticipated && <LabelButton content="참여완료" type="green" />}
                    </div>
                    <div className="content-data-text">
                        <EyeIcon size={44} />
                        {contents?.view_count}
                    </div>
                    <div className="content-data-text">{categoryName}</div>
                    <div className="content-data-text">
                        <HeartIcon variant="line" size={44} />
                        {contents?.participation_count}
                    </div>
                </div>
            </div>
        );
        content = (
            <div className="survey-content-text">
                <div dangerouslySetInnerHTML={{ __html: contents?.description }} />
            </div>
        );
        form = <AnswerForm survey={contents} />;
        comment = (
            <div className="comments-container">
                <div className="comments-titles">
                    <div className="comments-title">댓글의견</div>
                    <div className="comments-description">위 제안에 공감하신다면 공감버튼을 누르고 제안을 발전시킬 수 있는 구체적인 댓글을 달아주세요.</div>

                    <textarea className="comments-input" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />

                    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                        <TextButtonS content={commentLoading ? "등록 중..." : "의견 등록"} onClick={handleCreateComment} type={commentLoading ? "none" : "default"} disabled={commentLoading} />
                    </div>
                </div>

                <div className="comments-list">{comments.length === 0 ? null : comments.map((c) => <Comment key={c.comment_id} user={c.name} createdAt={c.created_at} content={c.content} />)}</div>
            </div>
        );
    } else if (pageType === "proposal") {
        if (state === "WAIT") {
            text = "대기중";
            color = "gray";
        } else if (state === "OPEN") {
            text = "토론중";
            color = "red";
        } else if (state === "ANSWER") {
            text = "답변대기";
            color = "gray";
        } else if (state === "ADOPTED") {
            text = "채택";
            color = "primary";
        } else if (state === "REFUSAL") {
            text = "미채택";
            color = "gray";
        }

        banner = proposalBanner;
        title = (
            <div className="content-title-container">
                {contents?.title}
                <div className="content-author-text">
                    <p>{maskName(user?.name)}</p>
                    {normalizeDay(contents?.start_at)} ~ {normalizeDay(contents?.end_at)}
                </div>
                <div className="content-data-container">
                    <div className="content-data-text">
                        <LabelButton content={text} type={color} />
                    </div>
                    <div className="content-data-text">
                        <EyeIcon size={44} />
                        {contents?.view_count}
                    </div>
                    <div className="content-data-text">{categoryName}</div>
                    <div className="content-data-text">
                        <HeartIcon variant="line" size={44} />
                        {contents?.participation_count}
                    </div>
                </div>
            </div>
        );
        content = <div className="survey-content-text">{contents?.content}</div>;
        form = (
            <div className="content-buttons">
                <TextButtonS content="공감" type={hasParticipated ? "none" : "default"} onClick={handleLike} disabled={hasParticipated} />
                <TextButtonS content="즐겨찾기" type={isBookmarked ? "hover" : "default"} onClick={handleBookmark} />
                <TextButtonS content="목록" onClick={() => (window.location.href = "/proposal")} />
            </div>
        );
        comment = (
            <div className="comments-container" style={{ boxShadow: "inset 0 1px 0 0 var(--gray-light-active)", padding: "5rem 0" }}>
                <div className="comments-titles">
                    <div className="comments-title">댓글의견</div>
                    <div className="comments-description">위 제안에 공감하신다면 공감버튼을 누르고 제안을 발전시킬 수 있는 구체적인 댓글을 달아주세요.</div>

                    <textarea className="comments-input" value={commentInput} onChange={(e) => setCommentInput(e.target.value)} />

                    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                        <TextButtonS content={commentLoading ? "등록 중..." : "의견 등록"} onClick={handleCreateComment} type={commentLoading ? "none" : "default"} disabled={commentLoading} />
                    </div>
                </div>

                <div className="comments-list">{comments.length === 0 ? null : comments.map((c) => <Comment key={c.comment_id} user={c.name} createdAt={c.created_at} content={c.content} />)}</div>
            </div>
        );
    } else if (pageType === "notice") {
        banner = noticeBanner;
        title = (
            <div className="content-title-container">
                {contents?.title}
                <div className="content-author-text">
                    <p>{contents?.author}</p>
                </div>
            </div>
        );
        content = (
            <div className="survey-content-text">
                <div dangerouslySetInnerHTML={{ __html: contents?.content }} />
            </div>
        );
        form = (
            <div className="content-buttons">
                <TextButtonS content="즐겨찾기" type={isBookmarked ? "hover" : "default"} onClick={handleBookmark} />
                <TextButtonS content="목록" onClick={() => (window.location.href = "/nurisodam")} />
            </div>
        );
        comment = (
            <div className="comments-container" style={{ boxShadow: "inset 0 1px 0 0 var(--gray-light-active), inset 0 -1px 0 0 var(--gray-light-active)", padding: "5rem 0" }}>
                <div className="comments-titles">
                    <div className="comments-next">다음글</div>

                    <div className="nurisodam-list-container">
                        {nextNotice ? (
                            <div
                                key={nextNotice.notice_id}
                                className="nurisodam-lists"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    addViewCount(nextNotice.notice_id);
                                    window.location.href = `/nurisodam/notice/${nextNotice.notice_id}`;
                                }}
                            >
                                <MegaphoneIcon size="44" />
                                <span className="nurisodam-list-text">{nextNotice.title ?? "제목 없음"}</span>

                                <div className="nurisodam-list-view">
                                    <EyeIcon size="44" />
                                    {nextNotice.view_count ?? 0}
                                </div>
                            </div>
                        ) : (
                            <div className="nurisodam-lists">
                                <span className="nurisodam-list-text">다음 글이 없습니다.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else if (pageType === "news") {
        banner = noticeBanner;
        title = (
            <div className="content-title-container">
                {contents?.title}
                <div className="content-author-text">
                    <p>{contents?.author}</p>
                </div>
            </div>
        );
        content = (
            <div className="survey-content-text">
                <div dangerouslySetInnerHTML={{ __html: contents?.content }} />
            </div>
        );
        form = (
            <div className="content-buttons">
                <TextButtonS content="즐겨찾기" type={isBookmarked ? "hover" : "default"} onClick={handleBookmark} />
                <TextButtonS content="목록" onClick={() => (window.location.href = "/nurisodam?category=동네소식")} />
            </div>
        );
        comment = (
            <div className="comments-container" style={{ boxShadow: "inset 0 1px 0 0 var(--gray-light-active), inset 0 -1px 0 0 var(--gray-light-active)", padding: "5rem 0" }}>
                <div className="comments-titles">
                    <div className="comments-next">다음글</div>

                    <div className="nurisodam-list-container">
                        {nextNews ? (
                            <div
                                key={nextNews.notice_id}
                                className="nurisodam-lists"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    addViewCount(nextNews.notice_id);
                                    window.location.href = `/nurisodam/news/${nextNews.notice_id}`;
                                }}
                            >
                                <MegaphoneIcon size="44" />
                                <span className="nurisodam-list-text">{nextNews.title ?? "제목 없음"}</span>

                                <div className="nurisodam-list-view">
                                    <EyeIcon size="44" />
                                    {nextNews.view_count ?? 0}
                                </div>
                            </div>
                        ) : (
                            <div className="nurisodam-lists">
                                <span className="nurisodam-list-text">다음 글이 없습니다.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else if (pageType === "result") {
        banner = noticeBanner;
        title = (
            <div className="content-title-container">
                {contents?.result_title}
                <div className="content-author-text">
                    <p>{contents?.author}</p>
                </div>
            </div>
        );
        content = (
            <div className="survey-content-text">
                <div dangerouslySetInnerHTML={{ __html: contents?.result_content }} />
            </div>
        );
        form = (
            <div className="content-buttons">
                <TextButtonS content="즐겨찾기" type={isBookmarked ? "hover" : "default"} onClick={handleBookmark} />
                <TextButtonS content="목록" onClick={() => (window.location.href = "/nurisodam?category=결과+게시판")} />
            </div>
        );
        comment = (
            <div className="comments-container" style={{ boxShadow: "inset 0 1px 0 0 var(--gray-light-active), inset 0 -1px 0 0 var(--gray-light-active)", padding: "5rem 0" }}>
                <div className="comments-titles">
                    <div className="comments-next">다음글</div>

                    <div className="nurisodam-list-container">
                        {nextResult ? (
                            <div
                                key={nextResult.result_id}
                                className="nurisodam-lists"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    addViewCount(nextResult.result_id);
                                    window.location.href = `/nurisodam/result/${nextResult.result_id}`;
                                }}
                            >
                                <MegaphoneIcon size="44" />
                                <span className="nurisodam-list-text">{nextResult.result_title ?? "제목 없음"}</span>

                                <div className="nurisodam-list-view">
                                    <EyeIcon size="44" />
                                    {nextResult.view_count ?? 0}
                                </div>
                            </div>
                        ) : (
                            <div className="nurisodam-lists">
                                <span className="nurisodam-list-text">다음 글이 없습니다.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="participate-container">
            <Header />
            {banner && <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />}

            <div className="participate-wrapper">
                <div>{title}</div>
                <div>{content}</div>
                <div>{form}</div>
                <div>{comment}</div>
            </div>
        </div>
    );
}

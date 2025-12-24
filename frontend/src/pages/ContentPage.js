import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NoticeAPI, ProposalAPI, UserAPI, ResultAPI, SurveyAPI, ParticipationAPI } from "../api/api";
import Header from "../components/Header";

import participateBanner from "../assets/image/participate/participatebanner.svg";
import proposalBanner from "../assets/image/proposal/proposalbanner.svg";
import noticeBanner from "../assets/image/nurisodam/banner.svg";
import AnswerForm from "../components/participate/survey/AnswerForm";
import EyeIcon from "../ui/icons/EyeIcon";
import HeartIcon from "../ui/icons/HeartIcon";
import TextButtonS from "../ui/button/TextButtonS";
import LabelButton from "../ui/button/LabelButton";

export default function ContentPage() {
    const navigate = useNavigate();
    const [contents, setContents] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(false);
    const [participations, setParticipations] = useState([]);
    const [hasParticipated, setHasParticipated] = useState(false);

    const location = useLocation();
    const pathname = location.pathname;
    const params = useParams();
    const loginUser = sessionStorage.getItem("user_id");

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
        return contents?.category_id ? map[contents.category_id] : null;
    }, [contents?.category_id]);

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
                setLoading(true);
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
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageType, params.surveyId, params.proposalId, params.noticeId, params.resultId]);

    let banner = null;
    let title = null;
    let content = null;
    let form = null;
    let comments = null;
    let color = null;
    let text = null;

    const maskName = (name) => {
        if (!name) return "";
        const len = name.length;
        if (len <= 1) return name;
        if (len === 2) return name.charAt(0) + "*";
        return name.charAt(0) + "*".repeat(name.length - 2) + name.charAt(name.length - 1);
    };

    const handleLike = () => {
        if (!hasParticipated) {
            const dto = {
                user_id: loginUser,
                target_type: "PROPOSAL",
                target_id: contents.proposal_id,
                participation_type: "LIKE",
            };
            ParticipationAPI.createParticipaiton(dto);
        } else if (hasParticipated) {
            // ParticipationAPI.deleteParticipaiton();

            console.log(contents);
            console.log(participations);
            console.log(contents.proposal_id === participations.target_id);
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
                    {contents?.start_at} ~ {contents?.end_at}
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
        content = <div dangerouslySetInnerHTML={{ __html: contents?.description }} />;
        form = <AnswerForm survey={contents} />;
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
                    {contents?.start_at} ~ {contents?.end_at}
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
        content = loading ? <div>불러오는 중...</div> : <div dangerouslySetInnerHTML={{ __html: contents?.content }} />;
        form = (
            <div className="content-buttons">
                <TextButtonS content={hasParticipated ? "공감 취소" : "공감"} type={hasParticipated ? "hover" : "default"} onClick={handleLike} />
                {/* <TextButtonS content="즐겨찾기" onClick={{}} /> */}
                <TextButtonS content="목록" onClick={() => navigate(-1)} />
            </div>
        );
    } else if (pageType === "notice") {
        banner = noticeBanner;
        title = contents?.title ?? "undefinded";
        content = loading ? (
            <div>불러오는 중...</div>
        ) : (
            <div>
                {contents?.notice_id}
                <div dangerouslySetInnerHTML={{ __html: contents?.content }} />
            </div>
        );
    } else if (pageType === "result") {
        banner = noticeBanner;
        title = contents?.result_title ?? "undefinded";
        content = loading ? (
            <div>불러오는 중...</div>
        ) : (
            <div>
                <div>{contents?.result_id}</div>
                <div>{contents?.author}</div>

                <div dangerouslySetInnerHTML={{ __html: contents?.result_content }} />
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
                <div>{comments}</div>
            </div>
        </div>
    );
}

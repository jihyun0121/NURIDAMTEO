import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { NoticeAPI, ProposalAPI, UserAPI, ResultAPI, SurveyAPI } from "../api/api";
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

    const location = useLocation();
    const pathname = location.pathname;
    const params = useParams();

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
        const fetchData = async () => {
            setContents(null);
            setUser(null);

            if (pageType === "unknown") return;
            try {
                setLoading(true);
                if (pageType === "participate") {
                    console.log(params);
                    const surveyRes = await SurveyAPI.getSurvey(params.surveyId);
                    const survey = surveyRes.data;
                    console.log(survey);
                    setContents(survey);
                    setState(survey.status);
                } else if (pageType === "proposal") {
                    const proposalRes = await ProposalAPI.getProposal(params.proposalId);
                    const proposal = proposalRes.data;
                    setContents(proposal);

                    if (proposal?.user_id) {
                        const userRes = await UserAPI.getUser(proposal.user_id);
                        setUser(userRes.data);
                    }
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

    if (pageType === "participate") {
        if (state === "WAIT") {
            text = "대기중";
            color = "gray";
        } else if (state === "OPEN") {
            text = "진행중";
            color = "red";
        } else if (state === "CLOSE") {
            text = "조사 종료";
            color = "gray";
        }
        banner = participateBanner;
        title = (
            <div className="content-title-container">
                <div className="content-title">{contents?.title}</div>
                <div className="content-author-text">
                    <p>{contents?.author}</p>
                    {contents?.start_at} ~ {contents?.end_at}
                </div>
                <div className="content-data-container">
                    <div className="content-data-text">
                        <LabelButton content={text} type={color} />
                        {contents?.survey_type === "PANEL" && <LabelButton content="선정조사" type="red" />}
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
    }

    if (pageType === "proposal") {
        banner = proposalBanner;
        title = (
            <div className="content-title-container">
                <div className="content-title">{contents?.title}</div>
                <div className="content-author-text">
                    <p>{user?.name}</p>
                    {contents?.start_at} ~ {contents?.end_at}
                </div>
                <div className="content-data-container">
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
                <TextButtonS content="공감" onClick={{}} />
                <TextButtonS content="즐겨찾기" onClick={{}} />
                <TextButtonS content="목록" onClick={() => navigate(-1)} />
            </div>
        );
    }

    if (pageType === "notice") {
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
    }

    if (pageType === "result") {
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

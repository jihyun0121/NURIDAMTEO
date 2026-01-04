import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NoticeAPI, ResultAPI, SearchAPI } from "../api/api";
import Header from "../components/Header";
import ProposalCard from "../components/proposal/ProposalCard";
import ParticipateCard from "../components/participate/ParticipateCard";
import MegaphoneIcon from "../ui/icons/MegaphoneIcon";
import EyeIcon from "../ui/icons/EyeIcon";

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    const [proposal, setProposal] = useState([]);
    const [survey, setSurvey] = useState([]);
    const [notice, setNotice] = useState([]);
    const [news, setNews] = useState([]);
    const [result, setResult] = useState([]);

    const [loadingMap, setLoadingMap] = useState({
        proposal: false,
        survey: false,
        notice: false,
        news: false,
        result: false,
    });

    useEffect(() => {
        if (!keyword.trim()) return;

        setProposal([]);
        setSurvey([]);
        setNotice([]);
        setNews([]);
        setResult([]);
        setLoadingMap({
            proposal: true,
            survey: true,
            notice: true,
            news: true,
            result: true,
        });

        const timer = setTimeout(() => {
            loadAll();
        }, 300);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    async function fetchSection(sectionKey, apiFn, setter, sliceSize) {
        try {
            const res = await apiFn(keyword);
            setter((res.data || []).slice(0, sliceSize));
        } catch (e) {
            console.log(`${sectionKey} 검색 실패`, e);
            setter([]);
        } finally {
            setLoadingMap((prev) => ({ ...prev, [sectionKey]: false }));
        }
    }

    async function loadAll() {
        fetchSection("proposal", SearchAPI.searchProposals, setProposal, 4);
        fetchSection("survey", SearchAPI.searchSurveys, setSurvey, 4);
        fetchSection("notice", SearchAPI.searchNotices, setNotice, 5);
        fetchSection("news", SearchAPI.searchNews, setNews, 5);
        fetchSection("result", SearchAPI.searchResults, setResult, 5);
    }

    const hasAny = proposal.length > 0 || survey.length > 0 || notice.length > 0 || news.length > 0 || result.length > 0;

    function renderSection(title, list, sectionKey, renderItem) {
        return (
            <div className="search-result">
                <div className="search-sub-title">
                    <div className="search-sub-text">{title}</div>
                    <div className="nav-text">더보기</div>
                </div>

                {loadingMap[sectionKey] ? (
                    <div className="search-page-none">로딩중...</div>
                ) : list.length === 0 ? (
                    <div className="search-page-none">검색 결과 없음</div>
                ) : (
                    <div className="search-items">
                        {list.map((item) => renderItem(item))}
                    </div>
                )}
            </div>
        );
    }

    const addViewCount = (type, id) => {
        if (type === "notice" || type === "news") {
            NoticeAPI.updateView(id);
        } else if (type === "result") {
            ResultAPI.updateView(id);
        }
    };


    return (
        <div className="search-page-container">
            <Header />

            <div className="search-page-content">
                <div className="search-page-title">검색결과</div>

                {!hasAny && Object.values(loadingMap).every((v) => v === false) ? (
                    <div className="search-page-none">
                        '{keyword}'에 대한 검색 결과가 없습니다.
                    </div>
                ) : (
                    <>
                        {renderSection("제안", proposal, "proposal", (item) => (
                            <ProposalCard key={item.proposal_id} proposal={item} />
                        ))}

                        {renderSection("설문", survey, "survey", (item) => (
                            <ParticipateCard key={item.survey_id} survey={item} />
                        ))}

                        {renderSection("공지 사항", notice, "notice", (item) => (
                            <div
                                key={item.notice_id}
                                className="nurisodam-lists"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    addViewCount("notice", item.notice_id);
                                    window.location.href = `/nurisodam/notice/${item.notice_id}`;
                                }}
                            >
                                <MegaphoneIcon size="44" />
                                <span className="nurisodam-list-text">{item.title ?? "제목 없음"}</span>

                                <div className="nurisodam-list-view">
                                    <EyeIcon size="44" />
                                    {item.view_count ?? 0}
                                </div>
                            </div>
                        ))}

                        {renderSection("누리소담", news, "news", (item) => (
                            <div
                                key={item.notice_id}
                                className="nurisodam-lists"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    addViewCount("news", item.notice_id);
                                    window.location.href = `/nurisodam/news/${item.notice_id}`;
                                }}
                            >
                                <MegaphoneIcon size="44" />
                                <span className="nurisodam-list-text">{item.title ?? "제목 없음"}</span>

                                <div className="nurisodam-list-view">
                                    <EyeIcon size="44" />
                                    {item.view_count ?? 0}
                                </div>
                            </div>
                        ))}

                        {renderSection("결과 게시판", result, "result", (item) => (
                            <div
                                key={item.result_id}
                                className="nurisodam-lists"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    addViewCount("result", item.result_id);
                                    window.location.href = `/nurisodam/result/${item.result_id}`;
                                }}
                            >
                                <MegaphoneIcon size="44" />
                                <span className="nurisodam-list-text">{item.result_title ?? "제목 없음"}</span>

                                <div className="nurisodam-list-view">
                                    <EyeIcon size="44" />
                                    {item.view_count ?? 0}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

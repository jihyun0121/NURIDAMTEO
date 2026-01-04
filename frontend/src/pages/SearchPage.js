import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { SearchAPI } from "../api/api";

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

    const hasAny =
        proposal.length > 0 ||
        survey.length > 0 ||
        notice.length > 0 ||
        news.length > 0 ||
        result.length > 0;

    function renderSection(title, list, keyName, renderTitle, sectionKey) {
        return (
            <div className="search-result">
                <div className="search-sub-title">
                    <div className="search-sub-text">{title}</div>
                    <div className="nav-text">더보기</div>
                </div>

                {loadingMap[sectionKey] ? (
                    <div className="search-none">로딩중...</div>
                ) : list.length === 0 ? (
                    <div className="search-none">검색 결과 없음</div>
                ) : (
                    list.map((item) => (
                        <div key={item[keyName]} className="search-item">
                            {renderTitle(item)}
                        </div>
                    ))
                )}
            </div>
        );
    }

    return (
        <div className="search-page-container">
            <Header />

            <div className="search-page-content">
                <div className="search-page-title">검색결과</div>
                {!hasAny ?
                    Object.values(loadingMap).every((v) => v === false) && (
                        <div className="search-page-none">
                            '{keyword}'에 대한 검색 결과가 없습니다.
                        </div>
                    ) : (<>
                        {renderSection("제안", proposal, "proposal_id", (item) => item.title, "proposal")}
                        {renderSection("설문", survey, "survey_id", (item) => item.title, "survey")}
                        {renderSection("공지 사항", notice, "notice_id", (item) => item.title, "notice")}
                        {renderSection("누리소담", news, "notice_id", (item) => item.title, "news")}
                        {renderSection("결과 게시판", result, "result_id", (item) => item.result_title, "result")}
                    </>)}
            </div>
        </div>
    );
}

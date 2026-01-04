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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!keyword.trim()) return;

        async function load() {
            setLoading(true);
            try {
                const [p, s, n, nw, r] = await Promise.all([
                    SearchAPI.searchProposals(keyword),
                    SearchAPI.searchSurveys(keyword),
                    SearchAPI.searchNotices(keyword),
                    SearchAPI.searchNews(keyword),
                    SearchAPI.searchResults(keyword),
                ]);

                setProposal((p.data || []).slice(0, 4));
                setSurvey((s.data || []).slice(0, 4));
                setNotice((n.data || []).slice(0, 5));
                setNews((nw.data || []).slice(0, 5));
                setResult((r.data || []).slice(0, 5));
            } catch (e) {
                console.log("검색 실패", e);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [keyword]);

    const hasAny =
        proposal.length > 0 ||
        survey.length > 0 ||
        notice.length > 0 ||
        news.length > 0 ||
        result.length > 0;

    return (
        <div className="search-page-container">
            <Header />
            <div className="search-page-content">
                <div className="search-page-title">검색결과</div>

                {!loading && !hasAny ? (
                    <div className="search-page-none">'{keyword}'에 대한 검색 결과가 없습니다.</div>
                ) : (
                    <><div className="search-result">
                        <div className="search-sub-title">
                            <div className="search-sub-text">제안</div>
                            <div className="nav-text">더보기</div>
                        </div>
                        {proposal.map((item) => (
                            <div key={item.proposal_id} className="search-item">
                                {item.title}
                            </div>
                        ))}
                    </div>

                        <div className="search-result">
                            <div className="search-sub-title">
                                <div className="search-sub-text">설문</div>
                                <div className="nav-text">더보기</div>
                            </div>
                            {survey.map((item) => (
                                <div key={item.survey_id} className="search-item">
                                    {item.title}
                                </div>
                            ))}
                        </div>

                        <div className="search-result">
                            <div className="search-sub-title">
                                <div className="search-sub-text">공지 사항</div>
                                <div className="nav-text">더보기</div>
                            </div>
                            {notice.map((item) => (
                                <div key={item.notice_id} className="search-item">
                                    {item.title}
                                </div>
                            ))}
                        </div>

                        <div className="search-result">
                            <div className="search-sub-title">
                                <div className="search-sub-text">누리소담</div>
                                <div className="nav-text">더보기</div>
                            </div>
                            {news.map((item) => (
                                <div key={item.notice_id} className="search-item">
                                    {item.title}
                                </div>
                            ))}
                        </div>

                        <div className="search-result">
                            <div className="search-sub-title">
                                <div className="search-sub-text">결과 게시판</div>
                                <div className="nav-text">더보기</div>
                            </div>
                            {result.map((item) => (
                                <div key={item.result_id} className="search-item">
                                    {item.result_title}
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

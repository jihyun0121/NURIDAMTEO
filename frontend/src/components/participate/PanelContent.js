import { useEffect, useState } from "react";
import { ParticipationAPI, SearchAPI, SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function PanelContent({ filterCategory, keyword }) {
    const [survey, setSurvey] = useState([]);
    const [allSurvey, setAllSurvey] = useState([]);
    const [participate, setParticipate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const res = await SurveyAPI.getPanelList();
                setSurvey(res.data || []);
                setAllSurvey(res.data || []);
            } catch (e) {
                console.log("패널 로딩 실패", e);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    useEffect(() => {
        async function loadMyParticipation() {
            const userId = Number(sessionStorage.getItem("user_id"));
            if (!userId) return;
            const res = await ParticipationAPI.getUserParticipaiton(userId);
            setParticipate(res.data || []);
        }
        loadMyParticipation();
    }, []);

    useEffect(() => {
        async function run() {
            setCurrentPage(1);
            setLoading(true);

            try {
                if (filterCategory) {
                    const res = await SearchAPI.searchCategoryPanels(filterCategory.key);
                    setSurvey(res.data || []);
                    return;
                }

                if (keyword.trim()) {
                    const res = await SearchAPI.searchPanels(keyword);
                    setSurvey(res.data || []);
                    return;
                }
                setSurvey(allSurvey);
            } catch (e) {
                console.log("패널 조회 실패", e);
                setSurvey([]);
            } finally {
                setLoading(false);
            }
        }

        run();
    }, [keyword, filterCategory, allSurvey]);

    const totalPages = Math.max(1, Math.ceil(survey.length / PAGE_SIZE));
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = survey.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="participate-list-wrapper">
            {loading ? (
                <div className="search-page-none">로딩중...</div>
            ) : survey.length === 0 ? (
                <div className="search-page-none">검색 결과가 없습니다.</div>
            ) : (
                <>
                    <div className="participate-list">
                        {currentParticipate.map((s) => (
                            <ParticipateCard key={s.survey_id} survey={s} participate={participate} />
                        ))}
                    </div>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
                </>
            )}
        </div>
    );
}

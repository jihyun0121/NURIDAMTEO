import { useEffect, useState, useMemo } from "react";
import { ParticipationAPI, SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function PanelContent({ filterCategory, keyword }) {
    const [survey, setSurvey] = useState([]);
    const [participate, setParticipate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadParticipate() {
            const res = await SurveyAPI.getPanelList(0);
            setSurvey(res.data);
        }
        loadParticipate();
    }, []);

    const filteredParticipate = useMemo(() => {
        let list = survey;

        if (filterCategory) {
            list = list.filter((p) => p.category_id === filterCategory.key);
        }

        if (keyword.trim()) {
            list = list.filter((p) =>
                (p.title || "").includes(keyword) ||
                (p.description || "").includes(keyword)
            );
        }

        return list;
    }, [survey, filterCategory, keyword]);


    useEffect(() => {
        setCurrentPage(1);
    }, [filterCategory]);

    useEffect(() => {
        async function loadMyParticipation() {
            const userId = sessionStorage.getItem("user_id");
            if (!userId) return;
            const res = await ParticipationAPI.getUserParticipaiton(userId);
            setParticipate(res.data);
        }
        loadMyParticipation();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [keyword]);

    const totalPages = Math.ceil(filteredParticipate.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = filteredParticipate.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="participate-list-wrapper">
            <div className="participate-list">
                {currentParticipate.length === 0 ? (
                    <div className="search-none">'{keyword}'에 대한 검색 결과가 없습니다.</div>
                ) : (currentParticipate.map((survey) => (
                    <ParticipateCard key={survey.survey_id} survey={survey} participate={participate} />
                )))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

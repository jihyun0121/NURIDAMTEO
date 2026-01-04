import { useEffect, useMemo, useState } from "react";
import { ParticipationAPI, SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function SurveyContent({ keyword }) {
    const [survey, setSurvey] = useState([]);
    const [participate, setParticipate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredSurvey = useMemo(() => {
        if (!keyword.trim()) return survey;
        return survey.filter((s) =>
            (s.title || "").includes(keyword) ||
            (s.description || "").includes(keyword)
        );
    }, [survey, keyword]);

    useEffect(() => {
        async function loadParticipate() {
            const res = await SurveyAPI.getSurveyList();
            setSurvey(res.data);
        }

        loadParticipate();
    }, []);

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

    const totalPages = Math.ceil(filteredSurvey.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = filteredSurvey.slice(startIndex, startIndex + PAGE_SIZE);

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

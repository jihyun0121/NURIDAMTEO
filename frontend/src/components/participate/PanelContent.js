import { useEffect, useState, useMemo } from "react";
import { ParticipationAPI, SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function PanelContent({ filterCategory }) {
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
        if (!filterCategory) return survey;
        return survey.filter((p) => p.category_id === filterCategory.key);
    }, [survey, filterCategory]);

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

    const totalPages = Math.ceil(filteredParticipate.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = filteredParticipate.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="participate-list-wrapper">
            <div className="participate-list">
                {currentParticipate.map((survey) => (
                    <ParticipateCard key={survey.survey_id} survey={survey} participate={participate} />
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

import { useEffect, useState } from "react";
import { ParticipationAPI, SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function SurveyContent() {
    const [survey, setSurvey] = useState([]);
    const [participate, setParticipate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    const totalPages = Math.ceil(survey.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = survey.slice(startIndex, startIndex + PAGE_SIZE);

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

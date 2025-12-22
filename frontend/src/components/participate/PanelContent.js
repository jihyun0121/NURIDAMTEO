import { useEffect, useState, useMemo } from "react";
import { SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function PanelContent({ filterCategory }) {
    const [participate, setParticipate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadParticipate() {
            const res = await SurveyAPI.getPanelList(0);
            setParticipate(res.data);
        }
        loadParticipate();
    }, []);

    const filteredParticipate = useMemo(() => {
        if (!filterCategory) return participate;
        return participate.filter((p) => p.category_id === filterCategory.key);
    }, [participate, filterCategory]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterCategory]);

    const totalPages = Math.ceil(filteredParticipate.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = filteredParticipate.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="participate-list-wrapper">
            <div className="participate-list">
                {currentParticipate.map((item) => (
                    <div key={item.survey_id}>
                        <ParticipateCard participate={item} />
                    </div>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

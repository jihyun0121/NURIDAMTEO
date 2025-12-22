import { useEffect, useState } from "react";
import { SurveyAPI } from "../../api/api";
import Pagination from "../Pagination";
import ParticipateCard from "./ParticipateCard";

const PAGE_SIZE = 8;

export default function PanelContent() {
    const [participate, setParticipate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadParticipate() {
            try {
                const res = await SurveyAPI.getPanelList(0);
                setParticipate(res.data);
            } catch (err) {
                console.log("설문 로딩 실패", err);
            }
        }

        loadParticipate();
    }, []);

    const totalPages = Math.ceil(participate.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentParticipate = participate.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="participate-list-wrapper">
            <div className="participate-list">
                {currentParticipate.map((participate) => (
                    <div key={participate.participate_id}>
                        <ParticipateCard participate={participate} />
                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

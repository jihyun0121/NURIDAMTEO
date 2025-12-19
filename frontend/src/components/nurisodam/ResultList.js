import { useEffect, useState } from "react";
import { NoticeAPI } from "../../api/api";
import MegaphoneIcon from "../../ui/icons/MegaphoneIcon";
import EyeIcon from "../../ui/icons/EyeIcon";
import Pagination from "../Pagination";

const PAGE_SIZE = 10;

export default function ResultList() {
    const [result, setResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadResult() {
            try {
                const res = await NoticeAPI.getResults(0);
                setResult(res.data || []);
            } catch (err) {
                console.log("뉴스 로딩 실패", err);
            }
        }

        loadResult();
    }, []);

    const totalPages = Math.ceil(result.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentResults = result.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="nurisodam-list-container">
            {currentResults.map((result) => (
                <div key={result.result_id} className="nurisodam-lists" style={{ cursor: "pointer" }} onClick={() => (window.location.href = `/nurisodam/result/${result.result_id}`)}>
                    <MegaphoneIcon size="44" />
                    <span className="nurisodam-list-text">{result?.result_title ?? "제목 없음"}</span>

                    <div className="nurisodam-list-view">
                        <EyeIcon size="44" />
                        {result?.view_count ?? 0}
                    </div>
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

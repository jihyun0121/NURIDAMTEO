import { useState } from "react";
import { ResultAPI } from "../../api/api";
import MegaphoneIcon from "../../ui/icons/MegaphoneIcon";
import EyeIcon from "../../ui/icons/EyeIcon";
import Pagination from "../Pagination";
import useResults from "./hook/useResults";

const PAGE_SIZE = 10;

export default function ResultList() {
    const { results } = useResults();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(results.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentResults = results.slice(startIndex, startIndex + PAGE_SIZE);

    const addViewCount = (r) => {
        ResultAPI.updateView(r);
    };

    return (
        <div className="nurisodam-list-container">
            {currentResults.map((result) => (
                <div
                    key={result.result_id}
                    className="nurisodam-lists"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        addViewCount(result.result_id);
                        window.location.href = `/nurisodam/result/${result.result_id}`;
                    }}
                >
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

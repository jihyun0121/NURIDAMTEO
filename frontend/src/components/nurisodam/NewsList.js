import { useEffect, useState } from "react";
import { NoticeAPI } from "../../api/api";
import MegaphoneIcon from "../../ui/icons/MegaphoneIcon";
import EyeIcon from "../../ui/icons/EyeIcon";
import Pagination from "../Pagination";

const PAGE_SIZE = 10;

export default function NewsList() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadNews() {
            try {
                const res = await NoticeAPI.getNews(0);
                setNews(res.data || []);
            } catch (err) {
                console.log("뉴스 로딩 실패", err);
            }
        }

        loadNews();
    }, []);

    const totalPages = Math.ceil(news.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentNewss = news.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="nurisodam-list-container">
            {currentNewss.map((news) => (
                <div key={news.notice_id} className="nurisodam-lists" style={{ cursor: "pointer" }} onClick={() => (window.location.href = `/nurisodam/news/${news.notice_id}`)}>
                    <MegaphoneIcon size="44" type={news?.is_pinned ? "hover" : "default"} />
                    <span className="nurisodam-list-text">{news?.title ?? "제목 없음"}</span>

                    <div className="nurisodam-list-view">
                        <EyeIcon size="44" />
                        {news?.view_count ?? 0}
                    </div>
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

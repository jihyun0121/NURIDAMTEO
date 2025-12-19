import { useEffect, useState } from "react";
import { NoticeAPI } from "../../api/api";
import ArrowIcon from "../../ui/icons/ArrowIcon";

export default function NewsList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function loadNews() {
            try {
                const res = await NoticeAPI.getNewses(0);
                const NewsList = res.data.slice(0, 5);
                setNews(NewsList);
            } catch (err) {
                console.log("뉴스 로딩 실패", err);
            }
        }

        loadNews();
    }, []);

    return (
        <div className="news-list-container">
            <div className="news-list-title">
                <div className="news-list-label">오늘의 누리소담 소식</div>
                <div className="news-list-btn" onClick={() => (window.location.href = "/nurisodam?category=동네소식")}>
                    모든 소식
                    <ArrowIcon direction="right" size={44} />
                </div>
            </div>

            {news.map((news, index) => (
                <div key={index} className="news-lists" style={{ cursor: "pointer" }} onClick={() => (window.location.href = `/nurisodam/news/${news.notice_id}`)}>
                    <span className="news-list-text">{news?.title ?? "제목 없음"}</span>
                </div>
            ))}
        </div>
    );
}

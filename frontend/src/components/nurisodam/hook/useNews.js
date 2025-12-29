import { useEffect, useState } from "react";
import { NoticeAPI } from "../../../api/api";

export default function useNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await NoticeAPI.getNews();
                setNews(res.data || []);
            } catch (e) {
                console.log("뉴스 로딩 실패", e);
                setNews([]);
            }
        };

        load();
    }, []);

    return { news };
}

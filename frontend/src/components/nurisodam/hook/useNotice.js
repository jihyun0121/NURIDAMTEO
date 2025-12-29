import { useEffect, useState } from "react";
import { NoticeAPI } from "../../../api/api";

export default function useNotices() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await NoticeAPI.getNotice();
                setNotices(res.data || []);
            } catch (e) {
                console.log("공지 로딩 실패", e);
                setNotices([]);
            }
        };

        load();
    }, []);

    return { notices };
}

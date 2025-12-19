import { useEffect, useState } from "react";
import { NoticeAPI } from "../../api/api";
import MegaphoneIcon from "../../ui/icons/MegaphoneIcon";
import EyeIcon from "../../ui/icons/EyeIcon";
import Pagination from "../Pagination";

const PAGE_SIZE = 10;

export default function NoticeList() {
    const [notice, setNotice] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function loadNotice() {
            try {
                const res = await NoticeAPI.getNotice(0);
                setNotice(res.data || []);
            } catch (err) {
                console.log("뉴스 로딩 실패", err);
            }
        }

        loadNotice();
    }, []);

    const totalPages = Math.ceil(notice.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentNotices = notice.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="nurisodam-list-container">
            {currentNotices.map((notice) => (
                <div key={notice.notice_id} className="nurisodam-lists" style={{ cursor: "pointer" }} onClick={() => (window.location.href = `/nurisodam/notice/${notice.notice_id}`)}>
                    <MegaphoneIcon size="44" type={notice?.is_pinned ? "hover" : "default"} />
                    <span className="nurisodam-list-text">{notice?.title ?? "제목 없음"}</span>

                    <div className="nurisodam-list-view">
                        <EyeIcon size="44" />
                        {notice?.view_count ?? 0}
                    </div>
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
    );
}

import { useEffect, useState } from "react";
import { NoticeAPI } from "../../api/api";
import MegaphoneIcon from "../../ui/icons/MegaphoneIcon";
import EyeIcon from "../../ui/icons/EyeIcon";

export default function NurisodamDetail() {
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        async function loadNotice() {
            try {
                const res = await NoticeAPI.getDetail(0);
                setNotice(res);
            } catch (err) {
                console.log("뉴스 로딩 실패", err);
            }
        }

        loadNotice();
    }, []);

    return (
        <div className="nurisodam-list-container">
            {notice.map((notice, index) => (
                <div key={index} className="nurisodam-lists" style={{ cursor: "pointer" }} onClick={() => (window.location.href = `/nurisodam/result/${notice.result_id}`)}>
                    <MegaphoneIcon size="44" type={notice?.is_pinned ? "hover" : "default"} />
                    <span className="nurisodam-list-text">{notice?.title ?? "제목 없음"}</span>
                    <div className="nurisodam-list-view">
                        <EyeIcon size="44" />
                        {notice?.view_count ?? "0"}
                    </div>
                </div>
            ))}
        </div>
    );
}

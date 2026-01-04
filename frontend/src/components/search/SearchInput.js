import { useState } from "react";
import SearchIcon from "../../ui/icons/SearchIcon";
import { useNavigate } from "react-router-dom";

export default function SearchInput({ onClose }) {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!keyword.trim()) return;
        onClose?.();
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    };

    return (
        <div className="search-input-container">
            <input
                className="search-input-content"
                placeholder="검색어를 입력해주세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                }}
            />
            <SearchIcon size={44} style={{ cursor: "pointer" }} onClick={handleSearch} />
        </div>
    );
}

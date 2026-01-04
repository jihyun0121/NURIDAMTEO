import { useEffect, useRef } from "react";
import SearchIcon from "../../ui/icons/SearchIcon";

export default function SearchInput({ onClose, onClick }) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
        <div ref={ref} className="search-input-container">
            <input className="search-input-content" placeholder="검색어를 입력해주세요" autoFocus />
            <SearchIcon size={44} style={{ cursor: "pointer" }} onClick={onClick} />
        </div>
    );
}

import { useEffect, useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import SearchDropdown from "../input/SearchDropdown";

export default function SearchBar({ type = "short", value, onChange, onSearch, onCategoryChange }) {
    const styles = { width: type === "long" ? "95rem" : "78.8125rem" };

    const [tempValue, setTempValue] = useState(value || "");

    useEffect(() => {
        setTempValue(value || "");
    }, [value]);

    const handleSearch = () => {
        onChange(tempValue);
        onSearch(tempValue);
    };

    return (
        <div className="search-container" style={styles}>
            <SearchDropdown onChange={onCategoryChange} />

            <div className="search-content" style={styles}>
                <input
                    className="search-input"
                    placeholder="검색어를 입력해주세요"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                />
                <SearchIcon size={44} style={{ cursor: "pointer" }} onClick={handleSearch} />
            </div>
        </div>
    );
}

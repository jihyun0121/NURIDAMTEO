import SearchIcon from "../icons/SearchIcon";
import SearchDropdown from "../input/SearchDropdown";

export default function SearchBar({ type = "short", onClick }) {
    const styles = {
        width: type === "long" ? "95rem" : "78.8125rem",
    };

    return (
        <div className="search-container" style={styles} onClick={onClick}>
            <SearchDropdown />
            <div className="search-content" style={styles} onClick={onClick}>
                <input className="search-input" placeholder="검색어를 입력해주세요"></input>
                <SearchIcon size={44} />
            </div>
        </div>
    );
}

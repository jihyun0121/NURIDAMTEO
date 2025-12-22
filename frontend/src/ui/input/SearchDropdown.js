import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export default function SearchDropdown({ onChange }) {
    const [currentValue, setCurrentValue] = useState("주제 선택");
    const [showOptions, setShowOptions] = useState(false);

    const optionData = [
        { key: 1, value: "복지·교육" },
        { key: 2, value: "교통·환경" },
        { key: 3, value: "행정·민원" },
        { key: 4, value: "안전·재난" },
        { key: 5, value: "경제·상권" },
        { key: 6, value: "문화·관광" },
        { key: 7, value: "청년·일자리" },
    ];

    const handleSelect = (option, e) => {
        e.stopPropagation();
        setCurrentValue(option.value);
        onChange(option);
        setShowOptions(false);
    };

    return (
        <div className="search-dropdown" onClick={() => setShowOptions(!showOptions)}>
            <div className="search-dropdown-label">{currentValue}</div>
            <ArrowIcon direction={showOptions ? "up" : "down"} size={44} color="inherit" />

            {showOptions && (
                <div className="search-dropdown-option">
                    {optionData.map((opt) => (
                        <div key={opt.key} className="dropdown-text" onClick={(e) => handleSelect(opt, e)}>
                            {opt.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export default function FormDropdown({ optionData = [] }) {
    const [currentValue, setCurrentValue] = useState("Text");
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (value, e) => {
        e.stopPropagation();
        setCurrentValue(value);
        setShowOptions(false);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setShowOptions((prev) => !prev);
    };

    return (
        <div className="dropdown-box" onClick={toggleDropdown}>
            <div className="dropdown-label">{currentValue}</div>
            <ArrowIcon direction={showOptions ? "up" : "down"} size={44} color="inherit" />

            {showOptions && (
                <div className="dropdown-option">
                    {/* {optionData.map((data) => (
                        <div className="dropdown-text" key={data.key} onClick={() => handleSelect(data.value)}>
                            {data.value}
                        </div>
                    ))} */}

                    <div className="dropdown-text" onClick={(e) => handleSelect("Text1", e)}>
                        Text1
                    </div>
                    <div className="dropdown-text" onClick={(e) => handleSelect("Text2", e)}>
                        Text2
                    </div>
                    <div className="dropdown-text" onClick={(e) => handleSelect("Text3", e)}>
                        Text3
                    </div>
                </div>
            )}
        </div>
    );
}

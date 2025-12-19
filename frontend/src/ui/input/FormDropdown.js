import { useEffect, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export default function FormDropdown({ size = "short", optionData = [], value, onChange }) {
    const [currentValue, setCurrentValue] = useState(value || optionData[0]?.value);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        if (value) setCurrentValue(value);
    }, [value]);

    let width;
    if (size === "short") width = "14.1875rem";
    else if (size === "long") width = "40.5rem";
    else width = "70.75rem";

    const handleSelect = (val, e) => {
        e.stopPropagation();
        setCurrentValue(val);
        onChange?.(val);
        setShowOptions(false);
    };

    return (
        <div className="dropdown-box" onClick={() => setShowOptions((p) => !p)} style={{ width }}>
            <div className="dropdown-label">{currentValue}</div>
            <ArrowIcon direction={showOptions ? "up" : "down"} size={44} />

            {showOptions && (
                <div className="dropdown-option" style={{ width }}>
                    {optionData.map((data) => (
                        <div key={data.key} className="dropdown-text" onClick={(e) => handleSelect(data.value, e)}>
                            {data.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

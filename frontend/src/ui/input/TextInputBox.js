import React from "react";

export default function TextInputBox({ children, type = "short", onClick, onChange, value, placeholder = "Text", inputType = "text", readOnly }) {
    let width;

    if (type === "short") width = "19.75rem";
    else if (type === "long") width = "40.5rem";
    else if (type === "large") width = "70.75rem";

    const styles = {
        width,
    };

    return (
        <div className="text-input-box" style={styles}>
            <input className="text-input" onClick={onClick} placeholder={placeholder} type={inputType} value={value} onChange={onChange} readOnly={readOnly} style={{ cursor: `${readOnly && "default"}` }} />
            {children}
        </div>
    );
}

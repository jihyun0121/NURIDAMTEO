import React from "react";

export default function TextInputBox({ children, type = "short", onClick, placeholder = "Text", inputType = "text" }) {
    let width;

    if (type === "short") width = "19.75rem";
    else if (type === "long") width = "40.5rem";
    else if (type === "large") width = "70.75rem";

    const styles = {
        width,
    };

    return (
        <div className="text-input-box" style={styles} onClick={onClick}>
            <input className="text-input" placeholder={placeholder} type={inputType}></input>
            {children}
        </div>
    );
}

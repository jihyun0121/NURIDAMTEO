import React from "react";
import Toggle from "./Toggle";

export default function TextInputToggle({ onClick, placeholder = "Text", inputType = "text" }) {
    return (
        <div className="text-input-box" onClick={onClick} style={{ width: "70.75rem" }}>
            <input className="text-input" placeholder={placeholder} type={inputType}></input>
            <Toggle />
        </div>
    );
}

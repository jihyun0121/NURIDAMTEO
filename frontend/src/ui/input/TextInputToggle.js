import React from "react";
import Toggle from "./Toggle";

export default function TextInputToggle({ value, onClick, placeholder = "Text", checked, onChange }) {
    return (
        <div className="text-input-box" onClick={onClick} style={{ width: "70.75rem" }}>
            <input className="text-input" placeholder={placeholder} value={value} readOnly ></input>
            <Toggle checked={checked} onChange={onChange} />
        </div>
    );
}

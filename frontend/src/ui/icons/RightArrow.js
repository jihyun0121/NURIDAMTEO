import { useState } from "react";

export default function RightArrow({ type = "default" }) {
    const [state, setState] = useState("default");

    const icons = {
        default: (
            <>
                {type === "fill" && <rect x="44" y="1.9233e-06" width="44" height="44" rx="22" transform="rotate(90 44 1.9233e-06)" fill="#EEEEEE" />}
                <path d="M20 30L28 22L20 14" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),

        hover: (
            <>
                <rect x="44" y="1.9233e-06" width="44" height="44" rx="22" transform="rotate(90 44 1.9233e-06)" fill="#FFF5EC" />
                <path d="M20 30L28 22L20 14" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),

        action: (
            <>
                <rect x="44" y="1.9233e-06" width="44" height="44" rx="22" transform="rotate(90 44 1.9233e-06)" fill="#FFE0C5" />
                <path d="M20 30L28 22L20 14" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

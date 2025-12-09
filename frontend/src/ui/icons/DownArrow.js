import { useState } from "react";

export default function LeftArrow({ type = "default" }) {
    const [state, setState] = useState("default");

    const icons = {
        default: (
            <>
                {type === "fill" && <rect x="44" y="44" width="44" height="44" rx="22" transform="rotate(180 44 44)" fill="#EEEEEE" />}
                <path d="M14 20L22 28L30 20" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),

        hover: (
            <>
                <rect x="44" y="44" width="44" height="44" rx="22" transform="rotate(180 44 44)" fill="#FFF5EC" />
                <path d="M14 20L22 28L30 20" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),

        action: (
            <>
                <rect x="44" y="44" width="44" height="44" rx="22" transform="rotate(180 44 44)" fill="#FFE0C5" />
                <path d="M14 20L22 28L30 20" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

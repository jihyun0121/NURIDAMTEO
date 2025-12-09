import { useState } from "react";

export default function LeftArrow({ type = "default" }) {
    const [state, setState] = useState("default");

    const icons = {
        default: (
            <>
                {type === "fill" && <rect x="44" y="1.9233e-06" width="44" height="44" rx="22" transform="rotate(90 44 1.9233e-06)" fill="#EEEEEE" />}
                <path d="M30 24L22 16L14 24" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        ),

        hover: (
            <>
                <rect width="44" height="44" rx="22" fill="#FFF5EC" />
                <path d="M30 24L22 16L14 24" stroke="#FF9B43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        ),

        action: (
            <>
                <rect width="44" height="44" rx="22" fill="#FFE0C5" />
                <path d="M30 24L22 16L14 24" stroke="#FF9B43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        ),
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

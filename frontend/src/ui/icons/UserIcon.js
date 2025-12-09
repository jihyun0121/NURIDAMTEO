import { useState } from "react";

export default function UserIcon({ type = "default" }) {
    const [state, setState] = useState("default");

    const icons = {
        default: (
            <>
                {type === "fill" && <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" fill="#EEEEEE" />}

                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),

        hover: (
            <>
                <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" fill="#FFF5EC" />
                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),

        action: (
            <>
                <path d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z" fill="#FFE0C5" />
                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke="#FF9B43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

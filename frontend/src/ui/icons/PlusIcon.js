import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function PlusIcon({ type = "default", size }) {
    const [state, setState] = useState("default");

    const icons = {
        default: (
            <>
                {type === "fill" && <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />}
                <path d="M22 12V32M12 22H32" stroke={colors.gray.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        ),
        hover: (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M22 12V32M12 22H32" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        ),
        action: (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path d="M22 12V32M12 22H32" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        ),
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

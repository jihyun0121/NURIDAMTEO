import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

const ARROW_PATHS = {
    left: "M24 14L16 22L24 30",
    right: "M20 30L28 22L20 14",
    down: "M14 20L22 28L30 20",
    up: "M30 24L22 16L14 24",
};

const RECT_PROPS = {
    left: { y: 44, width: 44, height: 44, rx: 22, transform: "rotate(-90 0 44)" },
    right: { x: 44, y: 0, width: 44, height: 44, rx: 22, transform: "rotate(90 44 0)" },
    down: { x: 44, y: 44, width: 44, height: 44, rx: 22, transform: "rotate(180 44 44)" },
    up: { width: 44, height: 44, rx: 22 },
};

export default function ArrowIcon({ variant, type = "default", size }) {
    const [state, setState] = useState("default");

    const pathD = ARROW_PATHS[variant] || ARROW_PATHS.left;
    const rectProps = RECT_PROPS[variant] || RECT_PROPS.left;

    const icons = {
        default: (
            <>
                {type === "fill" && <rect {...rectProps} fill={colors.gray.light.base} />}

                <path d={pathD} stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
        hover: (
            <>
                <rect {...rectProps} fill={colors.orange.light.base} />
                <path d={pathD} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
        action: (
            <>
                <rect {...rectProps} fill={colors.orange.light.active} />
                <path d={pathD} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        ),
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

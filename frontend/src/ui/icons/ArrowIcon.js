import { colors } from "../../assets/style/tokens/colors";

const ARROW_PATHS = {
    left: "M24 14L16 22L24 30",
    right: "M20 30L28 22L20 14",
    down: "M14 20L22 28L30 20",
    up: "M30 24L22 16L14 24",
};

export default function ArrowIcon({ direction, type = "default", size, color = "default" }) {
    const pathD = ARROW_PATHS[direction] || ARROW_PATHS.left;
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path d={pathD} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect y="44" width="44" height="44" rx="22" transform="rotate(-90 0 44)" fill={colors.gray.light.base} />
                <path d={pathD} stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect y="44" width="44" height="44" rx="22" transform="rotate(-90 0 44)" fill={colors.orange.light.base} />
                <path d={pathD} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect y="44" width="44" height="44" rx="22" transform="rotate(-90 0 44)" fill={colors.orange.light.active} />
                <path d={pathD} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

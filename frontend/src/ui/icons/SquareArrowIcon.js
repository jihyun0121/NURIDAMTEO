import { colors } from "../../assets/style/tokens/colors";

const ARROW_PATHS = {
    left: {
        single: ["M24 14L16 22L24 30"],
        double: ["M28 14L20 22L28 30", "M22 14L14 22L22 30"],
    },
    right: {
        single: ["M20 30L28 22L20 14"],
        double: ["M16 14L24 22L16 30", "M22 14L30 22L22 30"],
    },
};

export default function SquareArroIcon({ direction, variant = "single", type = "default", size, color = "default" }) {
    const paths = ARROW_PATHS[direction][variant];
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                {paths.map((d, idx) => (
                    <path key={idx} d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ))}
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect y="44" width="44" height="44" rx="12" transform="rotate(-90 0 44)" fill={colors.gray.light.base} />

                {paths.map((d, idx) => (
                    <path key={idx} d={d} stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ))}
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect y="44" width="44" height="44" rx="12" transform="rotate(-90 0 44)" fill={colors.orange.light.base} />

                {paths.map((d, idx) => (
                    <path key={idx} d={d} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ))}
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect y="44" width="44" height="44" rx="12" transform="rotate(-90 0 44)" fill={colors.orange.light.active} />

                {paths.map((d, idx) => (
                    <path key={idx} d={d} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ))}
            </>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

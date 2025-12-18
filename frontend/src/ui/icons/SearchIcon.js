import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function SearchIcon({ type = "default", size, color = "default" }) {
    const [state, setState] = useState("default");
    let icon = null;

    const fillColors = {
        default: colors.gray.light.base,
        hover: colors.orange.light.hover,
        action: colors.orange.light.active,
    };
    const strokeColors = {
        default: colors.gray.normal.base,
        hover: colors.orange.normal.base,
        action: colors.orange.normal.base,
    };

    if (type === "default") {
        icon = (
            <>
                <path
                    d="M32 32L27.1745 27.1745M27.1745 27.1745C27.9999 26.3491 28.6547 25.3692 29.1014 24.2907C29.5481 23.2122 29.778 22.0563 29.778 20.889C29.778 19.7217 29.5481 18.5658 29.1014 17.4873C28.6547 16.4089 27.9999 15.429 27.1745 14.6035C26.3491 13.7781 25.3692 13.1234 24.2907 12.6766C23.2122 12.2299 22.0563 12 20.889 12C19.7217 12 18.5658 12.2299 17.4873 12.6766C16.4089 13.1234 15.429 13.7781 14.6035 14.6035C12.9365 16.2705 12 18.5315 12 20.889C12 23.2465 12.9365 25.5075 14.6035 27.1745C16.2705 28.8415 18.5315 29.778 20.889 29.778C23.2465 29.778 25.5075 28.8415 27.1745 27.1745Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={fillColors[state]} />
                <path
                    d="M32 32L27.1745 27.1745M27.1745 27.1745C27.9999 26.3491 28.6547 25.3692 29.1014 24.2907C29.5481 23.2122 29.778 22.0563 29.778 20.889C29.778 19.7217 29.5481 18.5658 29.1014 17.4873C28.6547 16.4089 27.9999 15.429 27.1745 14.6035C26.3491 13.7781 25.3692 13.1234 24.2907 12.6766C23.2122 12.2299 22.0563 12 20.889 12C19.7217 12 18.5658 12.2299 17.4873 12.6766C16.4089 13.1234 15.429 13.7781 14.6035 14.6035C12.9365 16.2705 12 18.5315 12 20.889C12 23.2465 12.9365 25.5075 14.6035 27.1745C16.2705 28.8415 18.5315 29.778 20.889 29.778C23.2465 29.778 25.5075 28.8415 27.1745 27.1745Z"
                    stroke={strokeColors[state]}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path
                    d="M32 32L27.1745 27.1745M27.1745 27.1745C27.9999 26.3491 28.6547 25.3692 29.1014 24.2907C29.5481 23.2122 29.778 22.0563 29.778 20.889C29.778 19.7217 29.5481 18.5658 29.1014 17.4873C28.6547 16.4089 27.9999 15.429 27.1745 14.6035C26.3491 13.7781 25.3692 13.1234 24.2907 12.6766C23.2122 12.2299 22.0563 12 20.889 12C19.7217 12 18.5658 12.2299 17.4873 12.6766C16.4089 13.1234 15.429 13.7781 14.6035 14.6035C12.9365 16.2705 12 18.5315 12 20.889C12 23.2465 12.9365 25.5075 14.6035 27.1745C16.2705 28.8415 18.5315 29.778 20.889 29.778C23.2465 29.778 25.5075 28.8415 27.1745 27.1745Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path
                    d="M32 32L27.1745 27.1745M27.1745 27.1745C27.9999 26.3491 28.6547 25.3692 29.1014 24.2907C29.5481 23.2122 29.778 22.0563 29.778 20.889C29.778 19.7217 29.5481 18.5658 29.1014 17.4873C28.6547 16.4089 27.9999 15.429 27.1745 14.6035C26.3491 13.7781 25.3692 13.1234 24.2907 12.6766C23.2122 12.2299 22.0563 12 20.889 12C19.7217 12 18.5658 12.2299 17.4873 12.6766C16.4089 13.1234 15.429 13.7781 14.6035 14.6035C12.9365 16.2705 12 18.5315 12 20.889C12 23.2465 12.9365 25.5075 14.6035 27.1745C16.2705 28.8415 18.5315 29.778 20.889 29.778C23.2465 29.778 25.5075 28.8415 27.1745 27.1745Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit", cursor: type === "fill" ? "pointer" : "" }} onMouseEnter={() => type === "fill" && setState("hover")} onMouseLeave={() => type === "fill" && setState("default")} onMouseDown={() => type === "fill" && setState("action")} onMouseUp={() => type === "fill" && setState("hover")}>
            {icon}
        </svg>
    );
}

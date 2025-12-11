import { colors } from "../../assets/style/tokens/colors";

export default function TextIcon({ type = "default", size, color = "default" }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path d="M19.3 13.28H21.52V20.26H24.14V22.08H21.52V31.1H19.3V13.28ZM16.84 15.16C16.84 20.4 14.7 24.96 8.84 27.9L7.6 26.24C11.9 24.04 14.2 21 14.62 16.94H8.54V15.16H16.84ZM33.2865 18.216H34.5185V23.186H36.4365V24.208H34.5185V30.55H33.2865V18.216ZM31.3265 19.546C31.3265 23.074 29.7445 26.238 25.7405 28.24L25.0545 27.316C28.1625 25.748 29.8285 23.438 30.0945 20.54H25.6565V19.546H31.3265Z" fill="currentColor" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                <path d="M19.3 13.28H21.52V20.26H24.14V22.08H21.52V31.1H19.3V13.28ZM16.84 15.16C16.84 20.4 14.7 24.96 8.84 27.9L7.6 26.24C11.9 24.04 14.2 21 14.62 16.94H8.54V15.16H16.84ZM33.2865 18.216H34.5185V23.186H36.4365V24.208H34.5185V30.55H33.2865V18.216ZM31.3265 19.546C31.3265 23.074 29.7445 26.238 25.7405 28.24L25.0545 27.316C28.1625 25.748 29.8285 23.438 30.0945 20.54H25.6565V19.546H31.3265Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M19.3 13.28H21.52V20.26H24.14V22.08H21.52V31.1H19.3V13.28ZM16.84 15.16C16.84 20.4 14.7 24.96 8.84 27.9L7.6 26.24C11.9 24.04 14.2 21 14.62 16.94H8.54V15.16H16.84ZM33.2865 18.216H34.5185V23.186H36.4365V24.208H34.5185V30.55H33.2865V18.216ZM31.3265 19.546C31.3265 23.074 29.7445 26.238 25.7405 28.24L25.0545 27.316C28.1625 25.748 29.8285 23.438 30.0945 20.54H25.6565V19.546H31.3265Z" fill={colors.orange.normal.base} strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path d="M19.3 13.28H21.52V20.26H24.14V22.08H21.52V31.1H19.3V13.28ZM16.84 15.16C16.84 20.4 14.7 24.96 8.84 27.9L7.6 26.24C11.9 24.04 14.2 21 14.62 16.94H8.54V15.16H16.84ZM33.2865 18.216H34.5185V23.186H36.4365V24.208H34.5185V30.55H33.2865V18.216ZM31.3265 19.546C31.3265 23.074 29.7445 26.238 25.7405 28.24L25.0545 27.316C28.1625 25.748 29.8285 23.438 30.0945 20.54H25.6565V19.546H31.3265Z" fill={colors.orange.normal.base} strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

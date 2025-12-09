import { colors } from "../../assets/style/tokens/colors";

export default function ShareIcon({ type = "default", size, color = "default" }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path d="M24.2222 12H32V19.7778M32 25.0411V30.3333C32 30.7754 31.8244 31.1993 31.5118 31.5118C31.1993 31.8244 30.7754 32 30.3333 32H13.6667C13.2246 32 12.8007 31.8244 12.4882 31.5118C12.1756 31.1993 12 30.7754 12 30.3333V13.6667C12 13.2246 12.1756 12.8007 12.4882 12.4882C12.8007 12.1756 13.2246 12 13.6667 12H18.6667M23 21L31.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                <path d="M24.2222 12H32V19.7778M32 25.0411V30.3333C32 30.7754 31.8244 31.1993 31.5118 31.5118C31.1993 31.8244 30.7754 32 30.3333 32H13.6667C13.2246 32 12.8007 31.8244 12.4882 31.5118C12.1756 31.1993 12 30.7754 12 30.3333V13.6667C12 13.2246 12.1756 12.8007 12.4882 12.4882C12.8007 12.1756 13.2246 12 13.6667 12H18.6667M23 21L31.5 12.5" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M24.2222 12H32V19.7778M32 25.0411V30.3333C32 30.7754 31.8244 31.1993 31.5118 31.5118C31.1993 31.8244 30.7754 32 30.3333 32H13.6667C13.2246 32 12.8007 31.8244 12.4882 31.5118C12.1756 31.1993 12 30.7754 12 30.3333V13.6667C12 13.2246 12.1756 12.8007 12.4882 12.4882C12.8007 12.1756 13.2246 12 13.6667 12H18.6667M23 21L31.5 12.5" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path d="M24.2222 12H32V19.7778M32 25.0411V30.3333C32 30.7754 31.8244 31.1993 31.5118 31.5118C31.1993 31.8244 30.7754 32 30.3333 32H13.6667C13.2246 32 12.8007 31.8244 12.4882 31.5118C12.1756 31.1993 12 30.7754 12 30.3333V13.6667C12 13.2246 12.1756 12.8007 12.4882 12.4882C12.8007 12.1756 13.2246 12 13.6667 12H18.6667M23 21L31.5 12.5" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

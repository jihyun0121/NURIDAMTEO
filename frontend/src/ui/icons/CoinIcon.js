import { colors } from "../../assets/style/tokens/colors";

export default function CoinIcon({ type = "default", size, color = "default" }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path d="M22 11C28.0751 11 33 15.9249 33 22C33 28.0751 28.0751 33 22 33C15.9249 33 11 28.0751 11 22C11 15.9249 15.9249 11 22 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 14C26.4185 14 30 17.5815 30 22C30 26.4185 26.4185 30 22 30C17.5815 30 14 26.4185 14 22C14 17.5815 17.5815 14 22 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 19.7551C24 19.7551 23.2 19.1422 22 19.1422M22 19.1422C21 19.1422 20 19.7547 20 20.5711C20 22.6116 24 21.3871 24 23.428C24 24.2444 23 24.8564 22 24.8564C20.8 24.8564 20 24.2444 20 24.2444M22 19.1422V18M22 26V24.8578" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                <path d="M22 11C28.0751 11 33 15.9249 33 22C33 28.0751 28.0751 33 22 33C15.9249 33 11 28.0751 11 22C11 15.9249 15.9249 11 22 11Z" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 14C26.4185 14 30 17.5815 30 22C30 26.4185 26.4185 30 22 30C17.5815 30 14 26.4185 14 22C14 17.5815 17.5815 14 22 14Z" stroke={colors.gray.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 19.7551C24 19.7551 23.2 19.1422 22 19.1422M22 19.1422C21 19.1422 20 19.7547 20 20.5711C20 22.6116 24 21.3871 24 23.428C24 24.2444 23 24.8564 22 24.8564C20.8 24.8564 20 24.2444 20 24.2444M22 19.1422V18M22 26V24.8578" stroke={colors.gray.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M22 11C28.0751 11 33 15.9249 33 22C33 28.0751 28.0751 33 22 33C15.9249 33 11 28.0751 11 22C11 15.9249 15.9249 11 22 11Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 14C26.4185 14 30 17.5815 30 22C30 26.4185 26.4185 30 22 30C17.5815 30 14 26.4185 14 22C14 17.5815 17.5815 14 22 14Z" stroke={colors.orange.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 19.7551C24 19.7551 23.2 19.1422 22 19.1422M22 19.1422C21 19.1422 20 19.7547 20 20.5711C20 22.6116 24 21.3871 24 23.428C24 24.2444 23 24.8564 22 24.8564C20.8 24.8564 20 24.2444 20 24.2444M22 19.1422V18M22 26V24.8578" stroke={colors.orange.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path d="M22 11C28.0751 11 33 15.9249 33 22C33 28.0751 28.0751 33 22 33C15.9249 33 11 28.0751 11 22C11 15.9249 15.9249 11 22 11Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 14C26.4185 14 30 17.5815 30 22C30 26.4185 26.4185 30 22 30C17.5815 30 14 26.4185 14 22C14 17.5815 17.5815 14 22 14Z" stroke={colors.orange.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 19.7551C24 19.7551 23.2 19.1422 22 19.1422M22 19.1422C21 19.1422 20 19.7547 20 20.5711C20 22.6116 24 21.3871 24 23.428C24 24.2444 23 24.8564 22 24.8564C20.8 24.8564 20 24.2444 20 24.2444M22 19.1422V18M22 26V24.8578" stroke={colors.orange.normal.base} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

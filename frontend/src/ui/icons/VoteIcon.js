import { colors } from "../../assets/style/tokens/colors";

export default function VoteIcon({ type = "default", size }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 22L21 24L25 20" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 22L21 24L25 20" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 22L21 24L25 20" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 22L21 24L25 20" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none">
            {icon}
        </svg>
    );
}

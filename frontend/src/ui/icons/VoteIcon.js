import { colors } from "../../assets/style/tokens/colors";

export default function VoteIcon({ variant, type = "default", size, color = "default" }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                {variant === "line" ? (
                    <>
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                ) : (
                    <>
                        <path d="M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857ZM33 30H11H33Z" fill="currentColor" />
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke={colors.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </>
                )}
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                {variant === "line" ? (
                    <>
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                ) : (
                    <>
                        <path d="M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857ZM33 30H11H33Z" fill="currentColor" />
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke={colors.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </>
                )}
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                {variant === "line" ? (
                    <>
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                ) : (
                    <>
                        <path d="M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857ZM33 30H11H33Z" fill={colors.orange.normal.base} />
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke={colors.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </>
                )}
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                {variant === "line" ? (
                    <>
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                ) : (
                    <>
                        <path d="M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857ZM33 30H11H33Z" fill={colors.orange.normal.base} />
                        <path d="M33 30H11M14.3 16.2857C14.3 15.0286 15.29 14 16.5 14H27.5C28.0835 14 28.6431 14.2408 29.0556 14.6695C29.4682 15.0981 29.7 15.6795 29.7 16.2857V30H14.3V16.2857Z" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 22L21 24L25 20" stroke={colors.white} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </>
                )}
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

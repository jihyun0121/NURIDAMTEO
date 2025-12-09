import { colors } from "../../assets/style/tokens/colors";

export default function UserIcon({ type = "default", size, color = "default" }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path d="M22 23C25.3137 23 28 20.3137 28 17C28 13.6863 25.3137 11 22 11C18.6863 11 16 13.6863 16 17C16 20.3137 18.6863 23 22 23Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 33C31 30.3478 30.0518 27.8043 28.364 25.9289C26.6761 24.0536 24.3869 23 22 23C19.6131 23 17.3239 24.0536 15.636 25.9289C13.9482 27.8043 13 30.3478 13 33" stroke={colors.orange.normal.base} strokeWidth="2" />
            </>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit" }}>
            {icon}
        </svg>
    );
}

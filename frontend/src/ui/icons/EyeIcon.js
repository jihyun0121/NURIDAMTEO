import { colors } from "../../assets/style/tokens/colors";

export default function EyeIcon({ type = "default", size }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                <path
                    d="M9.08125 22.4475C8.97292 22.1588 8.97292 21.8412 9.08125 21.5525C10.1364 19.0218 11.9275 16.858 14.2274 15.3354C16.5273 13.8128 19.2325 13 22 13C24.7675 13 27.4727 13.8128 29.7726 15.3354C32.0725 16.858 33.8636 19.0218 34.9187 21.5525C35.0271 21.8412 35.0271 22.1588 34.9187 22.4475C33.8636 24.9782 32.0725 27.142 29.7726 28.6646C27.4727 30.1872 24.7675 31 22 31C19.2325 31 16.5273 30.1872 14.2274 28.6646C11.9275 27.142 10.1364 24.9782 9.08125 22.4475Z"
                    stroke={colors.gray.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                <path
                    d="M9.08125 22.4475C8.97292 22.1588 8.97292 21.8412 9.08125 21.5525C10.1364 19.0218 11.9275 16.858 14.2274 15.3354C16.5273 13.8128 19.2325 13 22 13C24.7675 13 27.4727 13.8128 29.7726 15.3354C32.0725 16.858 33.8636 19.0218 34.9187 21.5525C35.0271 21.8412 35.0271 22.1588 34.9187 22.4475C33.8636 24.9782 32.0725 27.142 29.7726 28.6646C27.4727 30.1872 24.7675 31 22 31C19.2325 31 16.5273 30.1872 14.2274 28.6646C11.9275 27.142 10.1364 24.9782 9.08125 22.4475Z"
                    stroke={colors.gray.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                <path
                    d="M9.08125 22.4475C8.97292 22.1588 8.97292 21.8412 9.08125 21.5525C10.1364 19.0218 11.9275 16.858 14.2274 15.3354C16.5273 13.8128 19.2325 13 22 13C24.7675 13 27.4727 13.8128 29.7726 15.3354C32.0725 16.858 33.8636 19.0218 34.9187 21.5525C35.0271 21.8412 35.0271 22.1588 34.9187 22.4475C33.8636 24.9782 32.0725 27.142 29.7726 28.6646C27.4727 30.1872 24.7675 31 22 31C19.2325 31 16.5273 30.1872 14.2274 28.6646C11.9275 27.142 10.1364 24.9782 9.08125 22.4475Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                <path
                    d="M9.08125 22.4475C8.97292 22.1588 8.97292 21.8412 9.08125 21.5525C10.1364 19.0218 11.9275 16.858 14.2274 15.3354C16.5273 13.8128 19.2325 13 22 13C24.7675 13 27.4727 13.8128 29.7726 15.3354C32.0725 16.858 33.8636 19.0218 34.9187 21.5525C35.0271 21.8412 35.0271 22.1588 34.9187 22.4475C33.8636 24.9782 32.0725 27.142 29.7726 28.6646C27.4727 30.1872 24.7675 31 22 31C19.2325 31 16.5273 30.1872 14.2274 28.6646C11.9275 27.142 10.1364 24.9782 9.08125 22.4475Z"
                    stroke={colors.orange.normal.base}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M22 26C24.2091 26 26 24.2091 26 22C26 19.7909 24.2091 18 22 18C19.7909 18 18 19.7909 18 22C18 24.2091 19.7909 26 22 26Z" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none">
            {icon}
        </svg>
    );
}

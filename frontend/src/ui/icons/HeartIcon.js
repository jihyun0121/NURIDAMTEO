import { colors } from "../../assets/style/tokens/colors";

export default function HeartIcon({ variant, type = "default", size, color = "default" }) {
    let icon = null;

    if (type === "default") {
        icon = (
            <>
                {variant === "line" ? (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />
                {variant === "line" ? (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill="none" stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill={colors.gray.normal.base} stroke={colors.gray.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                {variant === "line" ? (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill="none" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill={colors.orange.normal.base} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                {variant === "line" ? (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill="none" stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <path d="M16.5 12C13.4629 12 11 14.4853 11 17.5516C11 20.0268 11.9625 25.9014 21.4368 31.84C21.6067 31.9447 21.8015 32 22 32C22.1985 32 22.3933 31.9447 22.5632 31.84C32.0386 25.9014 33 20.0268 33 17.5516C33 14.4853 30.5371 12 27.5 12C24.4629 12 22 15.3646 22 15.3646C22 15.3646 19.5371 12 16.5 12Z" fill={colors.orange.normal.base} stroke={colors.orange.normal.base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

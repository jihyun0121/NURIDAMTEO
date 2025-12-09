import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function BookmarkIcon({ variant, type = "default", size }) {
    const [state, setState] = useState("default");

    const icons = {
        default: (
            <>
                {type === "fill" && <rect width="44" height="44" rx="22" fill={colors.gray.light.base} />}
                {variant === "line" ? (
                    <path d="M14 13.5686V32L22 26.5098L30 32V13.5686C30 13.1526 29.8314 12.7536 29.5314 12.4594C29.2313 12.1653 28.8243 12 28.4 12H15.6C15.1757 12 14.7687 12.1653 14.4686 12.4594C14.1686 12.7536 14 13.1526 14 13.5686Z" stroke={colors.gray.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                ) : (
                    <path d="M14 13.5686V32L22 26.5098L30 32V13.5686C30 13.1526 29.8314 12.7536 29.5314 12.4594C29.2313 12.1653 28.8243 12 28.4 12H15.6C15.1757 12 14.7687 12.1653 14.4686 12.4594C14.1686 12.7536 14 13.1526 14 13.5686Z" fill={colors.gray.normal.base} stroke={colors.gray.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                )}
            </>
        ),
        hover: (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />
                {variant === "line" ? (
                    <path d="M14 13.5686V32L22 26.5098L30 32V13.5686C30 13.1526 29.8314 12.7536 29.5314 12.4594C29.2313 12.1653 28.8243 12 28.4 12H15.6C15.1757 12 14.7687 12.1653 14.4686 12.4594C14.1686 12.7536 14 13.1526 14 13.5686Z" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                ) : (
                    <path d="M14 13.5686V32L22 26.5098L30 32V13.5686C30 13.1526 29.8314 12.7536 29.5314 12.4594C29.2313 12.1653 28.8243 12 28.4 12H15.6C15.1757 12 14.7687 12.1653 14.4686 12.4594C14.1686 12.7536 14 13.1526 14 13.5686Z" fill={colors.orange.normal.base} stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                )}
                FF9B43
            </>
        ),
        action: (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />
                {variant === "line" ? (
                    <path d="M14 13.5686V32L22 26.5098L30 32V13.5686C30 13.1526 29.8314 12.7536 29.5314 12.4594C29.2313 12.1653 28.8243 12 28.4 12H15.6C15.1757 12 14.7687 12.1653 14.4686 12.4594C14.1686 12.7536 14 13.1526 14 13.5686Z" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                ) : (
                    <path d="M14 13.5686V32L22 26.5098L30 32V13.5686C30 13.1526 29.8314 12.7536 29.5314 12.4594C29.2313 12.1653 28.8243 12 28.4 12H15.6C15.1757 12 14.7687 12.1653 14.4686 12.4594C14.1686 12.7536 14 13.1526 14 13.5686Z" fill={colors.orange.normal.base} stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                )}
                FF9B43
            </>
        ),
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ cursor: "pointer" }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")}>
            {icons[state]}
        </svg>
    );
}

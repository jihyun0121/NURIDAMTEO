import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function BellIcon({ type = "default", size, color = "default" }) {
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
                    d="M16 32C15.4696 32 14.9609 31.7893 14.5858 31.4142C14.2107 31.0391 14 30.5304 14 30V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H24C24.3166 11.9995 24.6301 12.0616 24.9225 12.1828C25.215 12.3039 25.4806 12.4818 25.704 12.706L29.292 16.294C29.5168 16.5175 29.6952 16.7833 29.8167 17.0762C29.9382 17.369 30.0005 17.683 30 18V30C30 30.5304 29.7893 31.0391 29.4142 31.4142C29.0391 31.7893 28.5304 32 28 32H16Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M24 12V17C24 17.2652 24.1054 17.5196 24.2929 17.7071C24.4804 17.8946 24.7348 18 25 18H30M22 28V22M22 28L19 25M22 28L25 25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        );
    } else if (type === "fill") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={fillColors[state]} />

                <path
                    d="M16 32C15.4696 32 14.9609 31.7893 14.5858 31.4142C14.2107 31.0391 14 30.5304 14 30V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H24C24.3166 11.9995 24.6301 12.0616 24.9225 12.1828C25.215 12.3039 25.4806 12.4818 25.704 12.706L29.292 16.294C29.5168 16.5175 29.6952 16.7833 29.8167 17.0762C29.9382 17.369 30.0005 17.683 30 18V30C30 30.5304 29.7893 31.0391 29.4142 31.4142C29.0391 31.7893 28.5304 32 28 32H16Z"
                    stroke={strokeColors[state]}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M24 12V17C24 17.2652 24.1054 17.5196 24.2929 17.7071C24.4804 17.8946 24.7348 18 25 18H30M22 28V22M22 28L19 25M22 28L25 25" stroke={strokeColors[state]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        );
    } else if (type === "hover") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.base} />

                <path
                    d="M16 32C15.4696 32 14.9609 31.7893 14.5858 31.4142C14.2107 31.0391 14 30.5304 14 30V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H24C24.3166 11.9995 24.6301 12.0616 24.9225 12.1828C25.215 12.3039 25.4806 12.4818 25.704 12.706L29.292 16.294C29.5168 16.5175 29.6952 16.7833 29.8167 17.0762C29.9382 17.369 30.0005 17.683 30 18V30C30 30.5304 29.7893 31.0391 29.4142 31.4142C29.0391 31.7893 28.5304 32 28 32H16Z"
                    stroke={colors.orange.normal.base}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M24 12V17C24 17.2652 24.1054 17.5196 24.2929 17.7071C24.4804 17.8946 24.7348 18 25 18H30M22 28V22M22 28L19 25M22 28L25 25" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        );
    } else if (type === "active") {
        icon = (
            <>
                <rect width="44" height="44" rx="22" fill={colors.orange.light.active} />

                <path
                    d="M16 32C15.4696 32 14.9609 31.7893 14.5858 31.4142C14.2107 31.0391 14 30.5304 14 30V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H24C24.3166 11.9995 24.6301 12.0616 24.9225 12.1828C25.215 12.3039 25.4806 12.4818 25.704 12.706L29.292 16.294C29.5168 16.5175 29.6952 16.7833 29.8167 17.0762C29.9382 17.369 30.0005 17.683 30 18V30C30 30.5304 29.7893 31.0391 29.4142 31.4142C29.0391 31.7893 28.5304 32 28 32H16Z"
                    stroke={colors.orange.normal.base}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M24 12V17C24 17.2652 24.1054 17.5196 24.2929 17.7071C24.4804 17.8946 24.7348 18 25 18H30M22 28V22M22 28L19 25M22 28L25 25" stroke={colors.orange.normal.base} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ color: color === "default" ? colors.gray.normal.base : "inherit", cursor: type === "fill" ? "pointer" : "" }} onMouseEnter={() => type === "fill" && setState("hover")} onMouseLeave={() => type === "fill" && setState("default")} onMouseDown={() => type === "fill" && setState("action")} onMouseUp={() => type === "fill" && setState("hover")}>
            {icon}
        </svg>
    );
}

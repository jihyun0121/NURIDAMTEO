import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function TextButtonS({ children, content, onClick, type = "default", style, disabled = false }) {
    const [state, setState] = useState("default");

    let styles;

    if (disabled) {
        styles = {
            default: {
                color: colors.white,
                backgroundColor: colors.orange.normal.base,
                boxShadow: `0 0 0 1px ${colors.orange.normal.base} inset`,
                cursor: "default",
            },
            hover: {
                color: colors.white,
                backgroundColor: colors.orange.normal.base,
                boxShadow: `0 0 0 1px ${colors.orange.normal.base} inset`,
                cursor: "default",
            },
            action: {
                color: colors.white,
                backgroundColor: colors.orange.normal.base,
                boxShadow: `0 0 0 1px ${colors.orange.normal.base} inset`,
                cursor: "default",
            },
        };
    }

    styles = {
        default: {
            color: type === "default" ? colors.gray.normal.base : colors.white,
            backgroundColor: type === "default" ? colors.white : type === "yellow" ? colors.yellow.normal.base : colors.orange.normal.base,
            cursor: "pointer",
        },
        hover: {
            color: type === "default" ? colors.gray.normal.base : colors.white,
            backgroundColor: type === "default" ? colors.orange.light.hover : type === "yellow" ? colors.yellow.normal.hover : colors.orange.normal.hover,
            cursor: "pointer",
        },
        action: {
            color: colors.white,
            backgroundColor: type === "default" ? colors.orange.normal.base : type === "yellow" ? colors.yellow.normal.active : colors.orange.normal.active,
            cursor: "pointer",
        },
    };

    const handleMouseEnter = () => !disabled && setState("hover");
    const handleMouseLeave = () => !disabled && setState("default");
    const handleMouseDown = () => !disabled && setState("action");
    const handleMouseUp = () => !disabled && setState("hover");

    return (
        <button className="text-btn-s" style={{ ...style, ...styles[state], cursor: `${disabled === false ? "hover" : "default"}` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={disabled ? undefined : onClick} disabled={disabled}>
            {children}
            {content}
        </button>
    );
}

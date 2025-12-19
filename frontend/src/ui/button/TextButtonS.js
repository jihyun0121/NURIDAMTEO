import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function TextButtonS({ children, content, onClick, type = "default", style }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            color: type === "default" ? colors.gray.normal.base : colors.white,
            backgroundColor: type === "default" ? colors.white : type === "yellow" ? colors.yellow.normal.base : colors.orange.normal.base,
        },
        hover: {
            color: type === "default" ? colors.gray.normal.base : colors.white,
            backgroundColor: type === "default" ? colors.orange.light.hover : type === "yellow" ? colors.yellow.normal.hover : colors.orange.normal.hover,
        },
        action: {
            color: colors.white,
            backgroundColor: type === "default" ? colors.orange.normal.base : type === "yellow" ? colors.yellow.normal.active : colors.orange.normal.active,
        },
    };

    return (
        <button className="text-btn-s" style={{ ...styles[state], ...style }} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            {children}
            {content}
        </button>
    );
}

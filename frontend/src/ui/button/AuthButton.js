import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import NuridamIcon from "../icons/NuridamIcon";

export default function AuthButton({ content, type = "user", color, onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            boxShadow: type === "line" ? `0 0 0 1px ${colors.gray.light.active} inset` : "none",
            backgroundColor: color === "hover" ? colors.orange.light.hover : colors.white,
            width: type === "line" ? "7.8125rem" : "auto",
            height: type === "line" ? "2.625rem" : "auto",
            justifyContent: type === "line" ? "center" : "start",
        },
        hover: {
            backgroundColor: colors.orange.light.hover,
            boxShadow: type === "line" ? `0 0 0 1px ${colors.gray.light.active} inset` : "none",
            width: type === "line" ? "7.8125rem" : "auto",
            height: type === "line" ? "2.625rem" : "auto",
            justifyContent: type === "line" ? "center" : "start",
        },
        action: {
            backgroundColor: colors.orange.light.active,
            boxShadow: type === "line" ? `0 0 0 1px ${colors.gray.light.active} inset` : "none",
            width: type === "line" ? "7.8125rem" : "auto",
            height: type === "line" ? "2.625rem" : "auto",
            justifyContent: type === "line" ? "center" : "start",
        },
    };

    return (
        <button className="auth-btn" style={styles[state]} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            <NuridamIcon type={type} size="25" />
            {content}
        </button>
    );
}

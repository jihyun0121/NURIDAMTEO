import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import NuridamIcon from "../icons/NuridamIcon";

export default function AuthButton({ content, type = "user", onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            border: type === "line" ? `1px solid ${colors.gray.light.active}` : "none",
            width: type === "line" ? "125px" : "auto",
            height: type === "line" ? "42px" : "auto",
            justifyContent: type === "line" ? "center" : "start",
        },
        hover: {
            backgroundColor: colors.orange.light.hover,
            border: type === "line" ? `1px solid ${colors.gray.light.active}` : "none",
            width: type === "line" ? "125px" : "auto",
            height: type === "line" ? "42px" : "auto",
            justifyContent: type === "line" ? "center" : "start",
        },
        action: {
            backgroundColor: colors.orange.light.active,
            border: type === "line" ? `1px solid ${colors.gray.light.active}` : "none",
            width: type === "line" ? "125px" : "auto",
            height: type === "line" ? "42px" : "auto",
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

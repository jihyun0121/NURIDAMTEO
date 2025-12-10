import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import NuridamIcon from "../icons/NuridamIcon";

export default function AuthButton({ content, type = "user", color, onClick, isActive = false }) {
    const [state, setState] = useState("default");
    const isSelect = isActive;

    const styles = {
        default: isSelect
            ? {
                  border: type === "line" ? `1px solid ${colors.gray.light.active}` : "none",
                  backgroundColor: color === "hover" ? colors.orange.light.hover : colors.white,
                  width: type === "line" ? "100%" : "auto",
                  height: type === "line" ? "42px" : "auto",
                  justifyContent: type === "line" ? "center" : "start",
              }
            : {},
        hover: isSelect
            ? {
                  backgroundColor: colors.orange.light.hover,
                  border: type === "line" ? `1px solid ${colors.gray.light.active}` : "none",
                  width: type === "line" ? "100%" : "auto",
                  height: type === "line" ? "42px" : "auto",
                  justifyContent: type === "line" ? "center" : "start",
              }
            : {},
        action: isSelect
            ? {
                  backgroundColor: colors.orange.light.active,
                  border: type === "line" ? `1px solid ${colors.gray.light.active}` : "none",
                  width: type === "line" ? "100%" : "auto",
                  height: type === "line" ? "42px" : "auto",
                  justifyContent: type === "line" ? "center" : "start",
              }
            : {},
    };

    return (
        <button
            className="auth-btn"
            style={styles[state]}
            onMouseEnter={() => setState("hover")}
            onMouseLeave={() => setState("default")}
            onMouseDown={() => {
                if (!isSelect) setState("action");
            }}
            onMouseUp={() => {
                if (!isSelect) setState("hover");
            }}
            onClick={onClick}
        >
            <NuridamIcon type={type} size="25" />
            {content}
        </button>
    );
}

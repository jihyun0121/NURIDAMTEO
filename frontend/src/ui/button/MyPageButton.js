import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import ArrowIcon from "../icons/ArrowIcon";

export default function MyPageButton({ children, content, type = "default", onClick, arrow = true }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            boxShadow: type === "line" ? `0 0 0 1px ${colors.orange.normal.base} inset` : "none",
            color: type === "hover"
                ? colors.white
                : type === "line"
                    ? colors.orange.normal.base
                    : colors.gray.normal.base,
            backgroundColor: type === "hover" ? colors.orange.normal.base : colors.white,
        },
        action: {
            boxShadow: type === "line" ? `0 0 0 1px ${colors.orange.normal.base} inset` : "none",
            color: type === "hover"
                ? colors.gray.normal.base
                : colors.white,
            backgroundColor: type === "hover" ? colors.white : colors.orange.normal.base,
        },
    };

    return (
        <button className="mypage-btn" style={styles[state]} onMouseEnter={() => setState("default")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("default")} onClick={onClick}>
            <div className="mypage-text">
                {children}
                {content}
            </div>
            {arrow === true && <ArrowIcon direction="right" size="44" color="inherit" />}
        </button>
    );
}

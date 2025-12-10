import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import ArrowIcon from "../icons/ArrowIcon";

export default function MyPageButton({ children, text, type = "default", onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            border: type === "line" ? `1px solid ${colors.orange.normal.base}` : "none",
            color: colors.gray.normal.base,
            backgroundColor: colors.white,
        },
        action: {
            border: type === "line" ? `1px solid ${colors.orange.normal.base}` : "none",
            color: colors.white,
            backgroundColor: colors.orange.normal.base,
        },
    };

    return (
        <button className="mypage-btn" style={styles[state]} onMouseEnter={() => setState("default")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("default")} onClick={onClick}>
            <div className="mypage-text">
                {children}
                {text}
            </div>
            <ArrowIcon direction="right" size="44" color="inherit" />
        </button>
    );
}

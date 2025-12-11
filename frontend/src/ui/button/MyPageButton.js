import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import ArrowIcon from "../icons/ArrowIcon";

export default function MyPageButton({ children, content, type = "default", onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            boxShadow: type === "line" ? `0 0 0 1px ${colors.orange.normal.base} inset` : "none",
            color: colors.gray.normal.base,
            backgroundColor: colors.white,
        },
        action: {
            boxShadow: type === "line" ? `0 0 0 1px ${colors.orange.normal.base} inset` : "none",
            color: colors.white,
            backgroundColor: colors.orange.normal.base,
        },
    };

    return (
        <button className="mypage-btn" style={styles[state]} onMouseEnter={() => setState("default")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("default")} onClick={onClick}>
            <div className="mypage-text">
                {children}
                {content}
            </div>
            <ArrowIcon direction="right" size="44" color="inherit" />
        </button>
    );
}

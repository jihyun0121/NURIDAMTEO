import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function TextButtonS({ children, content, onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            color: colors.gray.normal.base,
            fontstyle: { color: "var(--Gray-White, #FFF)" },
            fontFaceSize: "var(--Font-Tittle-xlarge)",
        },
        hover: {
            color: colors.gray.normal.base,
            backgroundColor: colors.orange.light.hover,
            fontstyle: { color: "var(--Gray-Normal, #555)" },
            fontFaceSize: "var(--Font-Tittle-xlarge)",
        },
        action: {
            color: colors.white,
            backgroundColor: colors.orange.normal.base,
            fontstyle: { color: "var(--Gray-Normal, #555)" },
            fontFaceSize: "var(--Font-Tittle-xlarge)",
        },
    };

    return (
        <button className="text-btn-s" style={styles[state]} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            {children}
            {content}
        </button>
    );
}

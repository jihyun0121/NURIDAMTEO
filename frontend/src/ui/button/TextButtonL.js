import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function TextButtonL({ content, onClick, type = "default" }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            color: type === "default" ? colors.gray.normal.base : colors.white,
            backgroundColor: type === "default" ? colors.white : colors.orange.normal.base,
        },
        hover: {
            color: colors.gray.normal.base,
            backgroundColor: colors.orange.light.hover,
        },
        action: {
            color: type === "default" ? colors.white : colors.gray.normal.base,
            backgroundColor: type === "default" ? colors.orange.normal.base : colors.white,
        },
    };

    return (
        <button className="text-btn-l" style={styles[state]} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            {content}
        </button>
    );
}

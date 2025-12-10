import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function TextButtonS({ content, onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            color: colors.gray.normal.base,
        },
        hover: {
            color: colors.gray.normal.base,
            backgroundColor: colors.orange.light.hover,
        },
        action: {
            color: colors.white,
            backgroundColor: colors.orange.normal.base,
        },
    };

    return (
        <button className="text-btn-l" style={styles[state]} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            {content}
        </button>
    );
}

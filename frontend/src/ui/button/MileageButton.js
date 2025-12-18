import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function MileageButton({ children, content, onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {
            backgroundColor: colors.gray.light.base,
        },
        hover: {
            color: colors.white,
            backgroundColor: colors.orange.normal.base,
        },
        action: {
            color: colors.white,
            backgroundColor: colors.orange.normal.active,
        },
    };

    return (
        <button className="mileage-btn" style={styles[state]} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            {children}
            {content}
        </button>
    );
}

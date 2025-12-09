import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";
import NuridamIcon from "../icons/NuridamIcon";

export default function AuthButton({ content, onClick }) {
    const [state, setState] = useState("default");

    const styles = {
        default: {},
        hover: {
            backgroundColor: colors.orange.light.hover,
        },
        action: {
            backgroundColor: colors.orange.light.active,
        },
    };

    return (
        <button className="auth-btn" style={styles[state]} onMouseEnter={() => setState("hover")} onMouseLeave={() => setState("default")} onMouseDown={() => setState("action")} onMouseUp={() => setState("hover")} onClick={onClick}>
            <NuridamIcon type="nuri" size="25" />
            {content}
        </button>
    );
}

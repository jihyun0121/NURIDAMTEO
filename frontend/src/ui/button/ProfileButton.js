import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function ProfileButton({ children, content, onClick, type = "default" }) {
    const [state, setState] = useState("default");

    const isSelect = type === "select";

    const styles = {
        default: isSelect
            ? {
                  color: colors.orange.normal.base,
                  backgroundColor: colors.orange.light.hover,
                  borderRadius: "12px 12px 0 0",
              }
            : {},
        hover: isSelect
            ? {
                  color: colors.orange.normal.base,
                  backgroundColor: colors.orange.light.hover,
                  borderRadius: "12px 12px 0 0",
              }
            : {},
        action: isSelect
            ? {}
            : {
                  backgroundColor: colors.orange.normal.base,
                  borderRadius: "12px 12px 0 0",
              },
    };

    return (
        <button
            className="profile-btn"
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
            {children}
            {content}
        </button>
    );
}

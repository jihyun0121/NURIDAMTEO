import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function ProfileButton({ children, content, active = false, onClick }) {
    const [isPressed, setIsPressed] = useState(false);

    const styles = isPressed
        ? {
              color: colors.white,
              backgroundColor: colors.orange.normal.base,
              borderRadius: "0.75rem 0.75rem 0 0",
          }
        : active
        ? {
              color: colors.orange.normal.base,
              backgroundColor: colors.orange.light.hover,
              borderRadius: "0.75rem 0.75rem 0 0",
          }
        : {
              backgroundColor: colors.white,
              borderRadius: "0.75rem",
          };

    return (
        <button className="profile-btn" style={styles} onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} onMouseLeave={() => setIsPressed(false)} onClick={onClick}>
            {children}
            {content}
        </button>
    );
}

import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function ProfileButton({ children, content, onClick, defaultActive = false }) {
    const [isActive, setIsActive] = useState(defaultActive);
    const [isPressed, setIsPressed] = useState(false);

    const styles = isPressed
        ? {
              color: colors.white,
              backgroundColor: colors.orange.normal.base,
              borderRadius: "12px 12px 0 0",
          }
        : isActive
        ? {
              color: colors.orange.normal.base,
              backgroundColor: colors.orange.light.hover,
              borderRadius: "12px 12px 0 0",
          }
        : {
              backgroundColor: "var(--white)",
              borderRadius: "12px",
          };

    const handleClick = () => {
        setIsActive((prev) => !prev);
        if (onClick) onClick();
    };

    return (
        <button className="profile-btn" style={styles} onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} onMouseLeave={() => setIsPressed(false)} onClick={handleClick}>
            {children}
            {content}
        </button>
    );
}

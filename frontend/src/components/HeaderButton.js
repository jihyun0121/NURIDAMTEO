import { useState } from "react";
import { colors } from "../assets/style/tokens/colors";

export default function HeaderButton({ content, onClick, active = false }) {
    const [hover, setHover] = useState(false);

    const styles = active
        ? { color: colors.orange.normal.base }
        : hover
        ? { color: colors.orange.normal.base }
        : {
              backgroundColor: "transparent",
          };

    return (
        <button className="header-btn" style={styles} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {content}
        </button>
    );
}

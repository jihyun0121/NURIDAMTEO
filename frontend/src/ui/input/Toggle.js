import { useState } from "react";
import { colors } from "../../assets/style/tokens/colors";

export default function Toggle() {
    const [isToggle, setIsToggle] = useState(false);

    const onToggle = () => setIsToggle(!isToggle);

    return (
        <div className="toggle-input" style={{ backgroundColor: isToggle ? colors.orange.normal.base : colors.gray.light.hover }} onClick={onToggle}>
            <div className="toggle-circle" style={{ transform: isToggle ? "translate(1.26rem, 0)" : "translate(0, 0)" }} />
        </div>
    );
}

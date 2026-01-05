import { colors } from "../../assets/style/tokens/colors";

export default function Toggle({ checked, onChange }) {
    return (
        <div
            className="toggle-input"
            style={{ backgroundColor: checked ? colors.orange.normal.base : colors.gray.light.hover, cursor: "pointer" }}
            onClick={(e) => {
                e.stopPropagation();
                onChange(!checked);
            }}
        >
            <div className="toggle-circle" style={{ transform: checked ? "translate(20px, 0)" : "translate(0, 0)" }} />
        </div>
    );
}

import { colors } from "../../assets/style/tokens/colors";

export default function LabelButton({ content, type = "gray" }) {
    let style = {};

    if (type === "gray") {
        style = {
            boxShadow: `0 0 0 1px ${colors.gray.normal.base} inset`,
            color: colors.gray.normal.base,
        };
    } else if (type === "red") {
        style = {
            boxShadow: `0 0 0 1px ${colors.red} inset`,
            color: colors.red,
        };
    } else if (type === "green") {
        style = {
            boxShadow: `0 0 0 1px ${colors.green} inset`,
            color: colors.green,
        };
    } else if (type === "primary") {
        style = {
            boxShadow: `0 0 0 1px ${colors.orange.normal.base} inset`,
            color: colors.orange.normal.base,
        };
    } else if (type === "fill") {
        style = {
            boxShadow: `0 0 0 1px ${colors.orange.normal.base} inset`,
            backgroundColor: colors.orange.normal.base,
            color: "#FFF",
        };
    }

    return (
        <button className="label-btn" style={{ ...style }}>
            {content}
        </button>
    );
}

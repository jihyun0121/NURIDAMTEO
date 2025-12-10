import { colors } from "../../assets/style/tokens/colors";

export default function LabelButton({ content, type = "gray" }) {
    let style = {};

    if (type === "gray") {
        style = {
            borderColor: colors.gray.normal.base,
            color: colors.gray.normal.base,
        };
    } else if (type === "red") {
        style = {
            borderColor: colors.red,
            color: colors.red,
        };
    } else if (type === "green") {
        style = {
            borderColor: colors.green,
            color: colors.green,
        };
    } else if (type === "primary") {
        style = {
            borderColor: colors.orange.normal.base,
            color: colors.orange.normal.base,
        };
    } else if (type === "fill") {
        style = {
            borderColor: colors.orange.normal.base,
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

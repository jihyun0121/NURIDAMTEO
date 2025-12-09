import { colors } from "../../assets/style/tokens/colors";
import { typography } from "../../assets/style/tokens/typography";

export default function SquareNumber({ value, type = "default", size = 44 }) {
    let style = {};

    if (type === "default") {
        style = {
            color: colors.gray.normal.base,
        };
    } else if (type === "fill") {
        style = {
            backgroundColor: colors.gray.light.base,
            color: colors.gray.normal.base,
        };
    } else if (type === "hover") {
        style = {
            backgroundColor: colors.orange.light.base,
            color: colors.orange.normal.base,
        };
    } else if (type === "active") {
        style = {
            backgroundColor: colors.orange.light.active,
            color: colors.orange.normal.base,
        };
    }

    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "12px",
                textAlign: "center",

                fontFamily: "SUIT",
                fontSize: typography.body.xlarge.size,
                fontWeight: typography.body.xlarge.weight,
                lineHeight: typography.body.xlarge.line,

                ...style,
            }}
        >
            {value}
        </div>
    );
}

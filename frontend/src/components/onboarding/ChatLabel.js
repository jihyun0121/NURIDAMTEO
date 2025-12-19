import { colors } from "../../assets/style/tokens/colors";

export default function ChatLabel({ content, type }) {
    let style = {};
    if (type === "white-l" || type === "white") {
        style = {
            borderRadius: `${type === "white-l" ? "3.125rem 3.125rem 3.125rem 0" : "3.125rem 3.125rem 0 3.125rem"}`,
            background: "#FFFAF5",
            boxShadow: `0 0 8px 0 ${type === "white-l" ? "rgba(255, 155, 67, 0.10)" : "rgba(255, 155, 67, 0.40)"}`,
        };
    } else if (type === "orange-l" || type === "orange") {
        style = {
            borderRadius: `${type === "white-l" ? "3.125rem 3.125rem 3.125rem 0" : "3.125rem 3.125rem 3.125rem 0"}`,
            background: colors.orange.light.hover,
            boxShadow: `0 0 8px 0 ${type === "orange-l" ? "rgba(255, 155, 67, 0.10)" : "rgba(255, 155, 67, 0.40)"}`,
        };
    }

    return (
        <div className="chat-label" style={{ ...style }}>
            #{content}
        </div>
    );
}

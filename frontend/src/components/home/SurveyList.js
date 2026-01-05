import LabelButton from "../../ui/button/LabelButton";
import { typography } from "../../assets/style/tokens/typography";

export default function SurveyList({ num, type = "none", size = "short", title, start, end, state, onClick }) {
    let fontSize;
    let fontWeight;
    let lineHeight;
    let content;
    let color;

    if (size === "short") {
        fontSize = typography.headline.medium.size;
        fontWeight = typography.headline.medium.weight;
        lineHeight = typography.headline.medium.lineHeight;
    } else if (size === "long") {
        fontSize = typography.headline.medium.size;
        fontWeight = typography.headline.medium.weight;
        lineHeight = typography.headline.medium.lineHeight;
    }

    const styles = {
        fontSize,
        fontWeight,
        lineHeight,
    };

    const valueDate = (date) => {
        if (!date) return "";

        if (date.includes("-")) {
            const [y, m, d] = date.slice(0, 10).split("-");
            return `${y}.${m}.${d}`;
        }

        const digits = date.replace(/\D/g, "");
        if (digits.length < 8) return "";

        const year = digits.slice(0, 4);
        const month = digits.slice(4, 6);
        const day = digits.slice(6, 8);

        return `${year}.${month}.${day}`;
    };

    if (state === "WAIT") {
        content = "대기중";
        color = "gray";
    } else if (state === "OPEN") {
        content = "토론중";
        color = "red";
    } else if (state === "ANSWER") {
        content = "답변대기";
        color = "gray";
    } else if (state === "ADOPTED") {
        content = "채택";
        color = "primary";
    } else if (state === "REFUSAL") {
        content = "미채택";
        color = "gray";
    }

    return (
        <div className="survey-list-container" onClick={onClick} style={{ width: size === "long" ? "70.75rem" : "25.4375rem", height: size === "long" ? "6rem" : "4.375rem", padding: size === "long" ? "1.25rem" : "1rem 1rem 1rem 0.5rem" }}>
            <div className="survey-list-text" style={{ gap: size === "long" ? "1.5rem" : "" }}>
                <div className="survey-list-num" style={{ width: size === "long" ? "2.75rem" : "2.5rem", height: size === "long" ? "3.5rem" : "2.375rem", ...styles }}>
                    {num}
                </div>

                <div className="survey-list-titles" style={{ display: size === "long" ? "flex" : "", flexDirection: size === "long" ? "column" : "", alignItems: size === "long" ? "flex-start" : "", gap: size === "long" ? "0.5rem" : "", justifyContent: size === "long" ? "center" : "" }}>
                    <div className="survey-list-title" style={{ width: size === "long" ? "56.9375rem" : type === "none" ? "21.4375rem" : "15.9375rem" }}>
                        {title}
                    </div>
                    {size === "long" && start ? (
                        <div className="survey-list-day">
                            <div>시작일 {valueDate(start)}</div>
                            <div>종료일 {valueDate(end)}</div>
                        </div>
                    ) : null}
                </div>
            </div>

            {type === "default" && <LabelButton content={content} type={color} />}
        </div>
    );
}

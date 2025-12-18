import LabelButton from "../../ui/button/LabelButton";
import { typography } from "../../assets/style/tokens/typography";

export default function SurveyList({ type = "none", size = "short" }) {
    const title = "Text";
    const num = "1";

    let width;
    let fontSize;
    let fontWeight;
    let lineHeight;

    if (size === "short") {
        fontSize = typography.headline.medium.size;
        fontWeight = typography.headline.medium.size;
        lineHeight = typography.headline.medium.size;
    } else if (size === "long") {
        fontSize = typography.headline.medium.size;
        fontWeight = typography.headline.medium.size;
        lineHeight = typography.headline.medium.size;
    }

    const styles = {
        width,
        fontSize,
        fontWeight,
        lineHeight,
    };

    return (
        <div className="survey-list-container" style={{ cursor: "pointer", width: `${size === "long" ? "70.75rem" : "24.3125rem"}` }}>
            <div className="survey-list-text">
                <div className="survey-list-num" style={styles}>
                    {num}
                </div>
                <div className="survey-list-title">
                    {title}
                    <div className="survey-list-day">
                        {size === "long" && (
                            <>
                                <div>시작일 2000.00.00</div>
                                <div>종료일 2000.00.00</div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {type === "default" && <LabelButton content="Label" type="gray" />}
        </div>
    );
}

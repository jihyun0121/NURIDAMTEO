import LabelButton from "../../ui/button/LabelButton";

export default function SurveyList({ type = "none" }) {
    const title = "Text";
    const num = "1";

    return (
        <div className="survey-list-container" style={{ cursor: "pointer" }}>
            <div className="survey-list-text">
                <div className="survey-list-num">{num}</div>
                <div className="survey-list-title">{title}</div>
            </div>

            {type === "default" && <LabelButton content="Label" type="gray" />}
        </div>
    );
}

import PanelContent from "./PanelContent";
import SurveyContent from "./SurveyContent";

export default function ParticipateContent({ category }) {
    switch (category) {
        case "설문조사":
            return <SurveyContent />;
        case "패널조사":
            return <PanelContent />;
        default:
            return null;
    }
}

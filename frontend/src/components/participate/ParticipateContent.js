import PanelContent from "./PanelContent";
import SurveyContent from "./SurveyContent";

export default function ParticipateContent({ category, filterCategory }) {
    switch (category) {
        case "설문조사":
            return <SurveyContent />;
        case "패널조사":
            return <PanelContent filterCategory={filterCategory} />;
        default:
            return null;
    }
}

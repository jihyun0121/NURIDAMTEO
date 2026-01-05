import PanelContent from "./PanelContent";
import SurveyContent from "./SurveyContent";

export default function ParticipateContent({ category, filterCategory, keyword }) {
    switch (category) {
        case "설문조사":
            return <SurveyContent keyword={keyword} filterCategory={filterCategory} />;
        case "패널조사":
            return <PanelContent keyword={keyword} filterCategory={filterCategory} />;
        default:
            return null;
    }
}

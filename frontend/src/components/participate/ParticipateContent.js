import PanelContent from "./PanelContent";
import SurveyContent from "./SurveyContent";

export default function ParticipateContent({ category, filterCategory, keyword }) {
    switch (category) {
        case "설문조사":
            return <SurveyContent keyword={keyword} />;
        case "패널조사":
            return <PanelContent filterCategory={filterCategory} keyword={keyword} />;
        default:
            return null;
    }
}

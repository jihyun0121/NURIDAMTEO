import PanelContent from "./PanelContent";
import SurveyContent from "./SurveyContent";

export default function ParticipateContent({ category, filterCategory, keyword, onSearch }) {
    switch (category) {
        case "설문조사":
            return <SurveyContent keyword={keyword} onSearch={onSearch} />;
        case "패널조사":
            return <PanelContent keyword={keyword} filterCategory={filterCategory} onSearch={onSearch} />;
        default:
            return null;
    }
}
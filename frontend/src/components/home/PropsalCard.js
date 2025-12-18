import { colors } from "../../assets/style/tokens/colors";
import LabelButton from "../../ui/button/LabelButton";
import HeartIcon from "../../ui/icons/HeartIcon";
import ChatIcon from "../../ui/icons/ChatIcon";

export default function PropsalCard({ type = "default" }) {
    return (
        <div className="propsal-card-container" style={{ borderColor: `${type === "light" ? colors.orange.normal.base : colors.gray.light.active}` }}>
            <div className="propsal-card-header">
                <div className="propsal-card-state">
                    <LabelButton content={"토론중"} type="red" />
                </div>
                <div className="propsal-card-date">종료 15일 전</div>
            </div>

            <div className="propsal-card-content">
                <div className="propsal-card-title">누리푸른숲도서관 푸른숲 책뜰 12월 이용 만족도 조사</div>
                <div className="propsal-card-text">누리푸른숲도서관 푸른숯 택뜰 12월 이용 만족도 설문조사 [설문 개요] 1. 이...</div>
            </div>

            <div className="propsal-card-footer">
                <HeartIcon size={44} type={type === "light" ? "hover" : "fill"} /> 5162
                <ChatIcon size={44} type={type === "light" ? "hover" : "fill"} /> 346
            </div>
        </div>
    );
}

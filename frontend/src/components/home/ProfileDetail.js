import AuthButton from "../../ui/button/AuthButton";
import SurveyList from "./SurveyList";
import { colors } from "../../assets/style/tokens/colors";

export default function ProfileDetail({ mileage = 0, type = "coin" }) {
    let content = null;
    let style = null;

    mileage = mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (type === "none") {
        style = { backgroundColor: colors.white, display: "none" };
    } else if (type === "coin") {
        content = (
            <>
                <div className="mileage-header">
                    <div>보유 마일리지</div>
                    <div className="mileage-text">{mileage} M</div>
                </div>
                <div className="mileage-menu">
                    <AuthButton content="페이 전환" type="line" />
                    <AuthButton content="상품권 신청" type="line" />
                    <AuthButton content="기부 신청" type="line" />
                </div>
                <div className="nav-text" onClick={() => window.location.href = "/my"}>내역 보기</div>
            </>
        );
        style = {
            borderRadius: "0 1.5rem 1.5rem 1.5rem",
        };
    } else if (type === "vote") {
        content = (
            <>
                <SurveyList type="default" num="1" title="text" state="WAIT" />
                <SurveyList type="default" num="2" title="text" state="WAIT" />
                <div className="nav-text" onClick={() => window.location.href = "/my?type=proposal"}>전체 보기</div>
            </>
        );
        style = { gap: "0.5rem", borderRadius: "1.5rem" };
    } else if (type === "bookmark") {
        content = (
            <>
                <SurveyList num="1" title="text" />
                <SurveyList num="2" title="text" />
                <div className="nav-text" onClick={() => window.location.href = "/my?type=bookmark"}>전체 보기</div>
            </>
        );
        style = { gap: "0.5rem", borderRadius: "1.5rem 0 1.5rem 1.5rem" };
    }
    return (
        <>
            <div className="profile-card-detail" style={{ ...style }}>
                {content}
            </div>
        </>
    );
}


import { colors } from "../../assets/style/tokens/colors";
import Logo from "../../ui/Logo";
import TextButtonS from "../../ui/button/TextButtonS";

export default function PopUpButton() {
    return (
        <div className="popup-button-container">
            <Logo size="l" />
            <div className="popup-button-text">
                <p>회원 탈퇴 시 계정 정보 및</p>
                <p>이용 기록은 복구할 수 없습니다.</p>
                <p>탈퇴를 진행하시겠습니까?</p>
            </div>
            <div className="popup-button-button">
                <TextButtonS content="취소" style={{ boxShadow: `0 0 0 1px ${colors.gray.light.active} inset` }} />
                <TextButtonS content="회원 탈퇴" style={{ color: colors.red, boxShadow: `0 0 0 1px ${colors.gray.light.active} inset` }} />
            </div>
        </div>
    );
}

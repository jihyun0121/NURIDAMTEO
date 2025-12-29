import { useState, useEffect } from "react";
import { UserAPI } from "../../api/api";
import { colors } from "../../assets/style/tokens/colors";
import TextInputBox from "../../ui/input/TextInputBox";
import TextInputToggle from "../../ui/input/TextInputToggle";
import ArrowIcon from "../../ui/icons/ArrowIcon";
import PopUpButton from "../my/PopUpButton";

const initialForm = {
    accessibility_mode: false,
    notification_enabled: true,
    is_deleted: false,
};

export default function SettingForm({ user, userId }) {
    const [notiError, setNotiError] = useState("");
    const [accessError, setAccessError] = useState("");
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState("");
    const [active, setActive] = useState(false);

    const [isPressed, setIsPressed] = useState(false);

    const questionStyle = active ? { borderRadius: "0.75rem 0.75rem 0 0" } : { borderRadius: "0.75rem" };

    const answerStyle = {
        borderRadius: "0 0 0.75rem 0.75rem",
    };

    useEffect(() => {
        if (!user) return;

        setForm({
            accessibility_mode: !!user.accessibility_mode,
            notification_enabled: !!user.notification_enabled,
            is_deleted: !!user.is_deleted,
        });
    }, [user]);

    const handleNotification = async (checked) => {
        setNotiError("");

        const newNotificationEnabled = !checked;

        setForm((prev) => ({
            ...prev,
            notification_enabled: newNotificationEnabled,
        }));

        try {
            await UserAPI.updateSetting(userId, {
                notification_enabled: newNotificationEnabled,
            });
        } catch (e) {
            setNotiError(e?.response?.data?.error || "알림 설정 변경 실패");
        }
    };

    const hadleAccess = async (checked) => {
        setAccessError("");

        setForm((prev) => ({
            ...prev,
            accessibility_mode: checked,
        }));

        try {
            await UserAPI.updateSetting(userId, {
                accessibility_mode: checked,
            });
        } catch (e) {
            setAccessError(e?.response?.data?.error || "접근성 모드 변경 실패");
        }
    };

    const hadleDelete = async (checked) => {
        setAccessError("");

        try {
            await UserAPI.updateSetting(userId, {
                is_deleted: true,
            });
            sessionStorage.clear();
            window.location.href = "/";
        } catch (e) {
            setAccessError(e?.response?.data?.error || "접근성 모드 변경 실패");
        }
    };

    return (
        <>
            {isPopUpOpen && <PopUpButton onCancel={() => setIsPopUpOpen(false)} onConfirm={hadleDelete} />}
            <div className="my-update-content">
                <TextInputToggle value="알림 끄기" checked={!form.notification_enabled} onChange={handleNotification} />
                {accessError && <div className="signup-warning">{accessError}</div>}
            </div>

            <div className="my-update-content">
                <TextInputToggle value="접근성 모드" checked={form.accessibility_mode} onChange={hadleAccess} />
                {notiError && <div className="signup-warning">{notiError}</div>}
            </div>

            <div className="my-terms-container">
                <div className="my-terms-question" style={questionStyle} onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} onMouseLeave={() => setIsPressed(false)} onClick={() => setActive((prev) => !prev)}>
                    이용약관 및 개인정보 처리 안내
                    <ArrowIcon direction={active ? "up" : "down"} size={44} />
                </div>

                {active && (
                    <div className="my-terms-anwer" style={answerStyle}>
                        <p>이용약관 안내 </p>
                        <p>누리담터는 시민의 의견을 존중하며, 모두가 안전하게 참여할 수 있는 공간을 만들기 위해 아래와 같은 이용 기준을 두고 있습니다. 본 서비스는 시민 제안, 의견 공유 및 참여를 목적으로 제공됩니다. 타인을 비방하거나 혐오, 욕설, 허위 정보가 포함된 게시물은 사전 안내 없이 삭제될 수 있습니다. 서비스 운영 목적에 맞지 않는 활동은 이용이 제한될 수 있습니다. 회원은 본인의 계정 정보를 안전하게 관리할 책임이 있습니다. 누리담터는 건강한 시민 소통 환경을 위해 지속적으로 노력하겠습니다.</p>
                        <p>개인정보 처리 안내</p>
                        <p>누리담터는 이용자의 개인정보를 소중히 보호하며, 관련 법령을 준수합니다. 수집된 개인정보는 회원 관리 및 서비스 제공을 위해서만 사용됩니다. 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 개인정보는 목적 달성 후 안전하게 파기됩니다. 이용자는 언제든지 개인정보 열람, 수정, 삭제를 요청할 수 있습니다. 안전하고 신뢰할 수 있는 서비스 운영을 위해 최선을 다하겠습니다.</p>
                    </div>
                )}
            </div>

            <div className="my-update-content">
                <span className="my-update-text"></span>
                <TextInputBox
                    type="large"
                    value="로그아웃"
                    readOnly={true}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        sessionStorage.clear();
                        window.location.href = "/";
                    }}
                />
                <span className="my-update-text"></span>
                <TextInputBox type="large" value="회원 탈퇴" onClick={() => setIsPopUpOpen(true)} readOnly={true} style={{ color: colors.red, cursor: "pointer" }} />
            </div>
        </>
    );
}

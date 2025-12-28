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

    const questionStyle = active
        ? { borderRadius: "0.75rem 0.75rem 0 0" }
        : { borderRadius: "0.75rem" };

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
            {isPopUpOpen && (<PopUpButton onCancel={() => setIsPopUpOpen(false)} onConfirm={hadleDelete} />)}
            <div className="my-update-content">
                <TextInputToggle value="알림 끄기" checked={!form.notification_enabled} onChange={handleNotification} />
                {accessError && <div className="signup-warning">{accessError}</div>}
            </div>

            <div className="my-update-content">
                <TextInputToggle value="접근성 모드" checked={form.accessibility_mode} onChange={hadleAccess} />
                {notiError && <div className="signup-warning">{notiError}</div>}
            </div>

            <div className="my-terms-container">
                <div
                    className="my-terms-question"
                    style={questionStyle}
                    onMouseDown={() => setIsPressed(true)}
                    onMouseUp={() => setIsPressed(false)}
                    onMouseLeave={() => setIsPressed(false)}
                    onClick={() => setActive((prev) => !prev)}
                >
                    이용약관 및 개인정보 처리 안내
                    <ArrowIcon direction={active ? "up" : "down"} size={44} />
                </div>

                {active && (
                    <div className="my-terms-anwer" style={answerStyle}>
                        이용약관
                        개인정보 처리방침
                    </div>
                )}
            </div>

            <div className="my-update-content">
                <span className="my-update-text"></span>
                <TextInputBox type="large" value="로그아웃" readOnly={true} style={{ cursor: "pointer" }}
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

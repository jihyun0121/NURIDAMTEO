import { useState, useEffect } from "react";
import { UserAPI } from "../../api/api";
import TextButtonS from "../../ui/button/TextButtonS";
import TextInputBox from "../../ui/input/TextInputBox";
import EyeIcon from "../../ui/icons/EyeIcon";
import FormDropdown from "../../ui/input/FormDropdown";
import SearchIcon from "../../ui/icons/SearchIcon";
import { useDaumPostcodePopup } from "react-daum-postcode";

const initialForm = {
    email: "",
    password: "",
    newPassword: "",
    name: "",
    gender: "남성",
    birthday: "",
    address: "",
    address_detail: "",
    postal_code: "",
};

export default function UpdateForm({ user, userId }) {
    const [passwordError, setPasswordError] = useState("");
    const [agreeError, setAgreeError] = useState("");
    const [agree, setAgree] = useState(false);
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState("");

    const postcodeScriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    useEffect(() => {
        if (!user) return;

        setForm((prev) => ({
            ...prev,
            email: user.email || "",
            name: user.name || "",
            gender: user.gender || "남성",
            birthday: valueBirthday(user.birthday) || "",
            address: user.address || "",
            address_detail: user.address_detail || "",
            postal_code: user.postal_code || "",
            password: "",
            newPassword: "",
        }));
    }, [user]);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname) extraAddress += data.bname;
            if (data.buildingName) extraAddress += extraAddress ? `, ${data.buildingName}` : data.buildingName;
            if (extraAddress) {
                fullAddress += ` (${extraAddress})`;
            }
        }

        setForm((prev) => ({
            ...prev,
            address: fullAddress,
            postal_code: data.zonecode,
        }));
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };
    const handleChange = (key) => (e) => {
        setForm({ ...form, [key]: e.target.value });
    };

    const handleUpdateProfile = async () => {
        const normalizedBirthday = normalizeBirthday(form.birthday);
        setPasswordError("");
        setAgreeError("");
        setError("");

        if (!form.email || !form.name || !form.gender || !form.birthday || !form.address || !form.address_detail || !form.postal_code) {
            setAgreeError("모든 정보를 입력해주세요.");
            return;
        }

        try {
            await UserAPI.updateProfile(userId, {
                name: form.name,
                gender: form.gender,
                birthday: normalizedBirthday,
                address: form.address,
                address_detail: form.address_detail,
                postal_code: form.postal_code,
            });

            await UserAPI.updateSetting(userId, {
                email: form.email,
            });

            if (form.password || form.newPassword) {
                if (!validatePassword(form.newPassword)) {
                    return;
                }

                await UserAPI.updatePassword(userId, {
                    current_password: form.password,
                    new_password: form.newPassword,
                });
            }

            alert("회원정보가 수정되었습니다");
        } catch (e) {
            setError(e?.response?.data?.error || "회원정보 수정 실패");
        }
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).+$/;

        if (password.length < 8) {
            setPasswordError("비밀번호는 최소 8자리 이상이어야 합니다");
            return false;
        }

        if (!regex.test(password)) {
            setPasswordError("비밀번호는 대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다");
            return false;
        }

        return true;
    };

    const normalizeBirthday = (input) => {
        if (!input) return "";

        const digits = input.replace(/\D/g, "");

        if (digits.length !== 8) return "";

        const year = digits.slice(0, 4);
        const month = digits.slice(4, 6);
        const day = digits.slice(6, 8);

        return `${year}-${month}-${day}`;
    };

    const valueBirthday = (birthday) => {
        if (!birthday) return "";

        const digits = birthday.replace(/\D/g, "");

        if (digits.length !== 8) return "";

        const year = digits.slice(0, 4);
        const month = digits.slice(4, 6);
        const day = digits.slice(6, 8);

        return `${year}.${month}.${day}`;
    };

    const optionData = [
        { key: 1, value: "남성" },
        { key: 2, value: "여성" },
    ];

    return (
        <>
            <div className="my-update-content">
                <span className="my-update-text">이메일</span>
                <TextInputBox type="large" placeholder="이메일" value={form.email} onChange={handleChange("email")} />
            </div>

            <div className="my-update-content">
                <span className="my-update-text">비밀번호</span>
                <TextInputBox type="large" placeholder="현재 비밀번호" inputType={visible ? "text" : "password"} value={form.password} onChange={handleChange("password")}>
                    <EyeIcon isHide={visible} size={44} color="inherit" onClick={() => setVisible((v) => !v)} />
                </TextInputBox>
                <TextInputBox type="large" placeholder="신규 비밀번호" inputType={visible ? "text" : "password"} value={form.newPassword} onChange={handleChange("newPassword")}>
                    <EyeIcon isHide={visible} size={44} color="inherit" onClick={() => setVisible((v) => !v)} />
                </TextInputBox>

                {passwordError && <div className="signup-warning">{passwordError}</div>}
            </div>

            <div className="my-update-content">
                <span className="my-update-text">개인정보</span>
                <TextInputBox type="large" placeholder="이름" value={form.name} onChange={handleChange("name")} />
                <FormDropdown size="large" placeholder="성별" value={form.gender} optionData={optionData} onChange={(value) => setForm({ ...form, gender: value })} />
                <TextInputBox
                    content="생년월일"
                    type="large"
                    placeholder="생년월일(YYYYMMDD)"
                    onChange={handleChange("birthday")}
                    value={form.birthday}
                    onBlur={() => {
                        const formatted = normalizeBirthday(form.birthday);
                        if (formatted) {
                            setForm({ ...form, birthday: formatted });
                        }
                    }}
                />
                <TextInputBox type="large" placeholder="거주지" value={form.address} readOnly={true}>
                    <SearchIcon size={44} color="inherit" style={{ cursor: "pointer" }} onClick={handleClick} />
                </TextInputBox>
                <div className="Signup-address-row">
                    <TextInputBox type="short" placeholder="상세주소" value={form.address_detail} onChange={handleChange("address_detail")} />
                    <TextInputBox type="short" placeholder="우편번호" value={form.postal_code} onChange={handleChange("postal_code")} />
                </div>

                {agreeError && <div className="signup-warning">{agreeError}</div>}
            </div>
            {error && <div className="signup-warning">{error}</div>}
            <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
                <TextButtonS content="저장하기" type="hover" onClick={handleUpdateProfile} />
            </div>
        </>
    );
}

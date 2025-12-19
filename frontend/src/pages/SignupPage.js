import { useState } from "react";
import { UserAPI } from "../api/api";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonL from "../ui/button/TextButtonL";
import SearchIcon from "../ui/icons/SearchIcon";
import FormDropdown from "../ui/input/FormDropdown";
import EyeIcon from "../ui/icons/EyeIcon";
import { useDaumPostcodePopup } from "react-daum-postcode";

const initialForm = {
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    gender: "남성",
    birthday: "",
    address: "",
    address_detail: "",
    postal_code: "",
};

export default function SignupPage() {
    const [passwordError, setPasswordError] = useState("");
    const [agreeError, setAgreeError] = useState("");
    const [agree, setAgree] = useState(false);
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState("");

    const postcodeScriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const open = useDaumPostcodePopup(postcodeScriptUrl);

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

    const handleSignup = async () => {
        const normalizedBirthday = normalizeBirthday(form.birthday);
        setPasswordError("");
        setAgreeError("");

        if (form.password !== form.passwordCheck) {
            setPasswordError("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!agree) {
            setAgreeError("필수 약관에 동의해 주세요.");
            return;
        }

        if (!validatePassword(form.password)) {
            return;
        }

        if (!form.email || !form.password) {
            setPasswordError("아이디 또는 비밀번호를 입력해주세요.");
            return;
        }

        if (!form.name || !form.gender || !form.birthday || !form.address || !form.address_detail || !form.postal_code) {
            setAgreeError("모든 정보를 입력해주세요.");
            console.log(form);
            return;
        }

        console.log(form);

        try {
            await UserAPI.createUser({
                email: form.email,
                password: form.password,
                name: form.name,
                gender: form.gender,
                birthday: normalizedBirthday,
                address: form.address,
                address_detail: form.address_detail,
                postal_code: form.postal_code,
            });

            console.log("회원가입 성공");

            alert("회원가입에 성공하였습니다. 로그인 화면으로 돌아갑니다.");
            window.location.href = "/login";
        } catch (e) {
            setError(e?.response?.data?.error || "회원가입 실패");
        }
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).+$/;

        if (password.length < 8) {
            setPasswordError("비밀번호는 최소 8자리 이상이어야 합니다.");
            return false;
        }

        if (!regex.test(password)) {
            setPasswordError("비밀번호는 대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
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

    const optionData = [
        { key: 1, value: "남성" },
        { key: 2, value: "여성" },
    ];

    return (
        <div className="Signup-container">
            <Header />
            <div className="Signup-wrapper">
                <Logo size="l" />
                <div className="Signup-box">
                    <span className="Signup-title"> 회원가입 </span>

                    <div className="Signup-buttons">
                        <TextInputBox type="long" placeholder="이메일" onChange={handleChange("email")} />
                        <TextInputBox type="long" placeholder="비밀번호" inputType={visible ? "text" : "password"} value={form.password} onChange={handleChange("password")}>
                            <EyeIcon isHide={visible} size={44} color="inherit" onClick={() => setVisible((v) => !v)} />
                        </TextInputBox>
                        <TextInputBox type="long" placeholder="비밀번호 확인" inputType={visible ? "text" : "password"} value={form.passwordCheck} onChange={handleChange("passwordCheck")}>
                            <EyeIcon isHide={visible} size={44} color="inherit" onClick={() => setVisible((v) => !v)} />
                        </TextInputBox>

                        {passwordError && <div className="signup-warning">{passwordError}</div>}

                        <div className="Signup-profile">
                            <TextInputBox type="long" placeholder="이름" onChange={handleChange("name")} />
                            <FormDropdown size="long" placeholder="성별" optionData={optionData} onChange={(value) => setForm({ ...form, gender: value })} />
                            <TextInputBox
                                content="생년월일"
                                type="long"
                                placeholder="생년월일(YYYYMMDD)"
                                onChange={handleChange("birthday")}
                                onBlur={() => {
                                    const formatted = normalizeBirthday(form.birthday);
                                    if (formatted) {
                                        setForm({ ...form, birthday: formatted });
                                    }
                                }}
                            />
                            <TextInputBox type="long" placeholder="거주지" value={form.address} readOnly={true}>
                                <SearchIcon size={44} color="inherit" style={{ cursor: "pointer" }} onClick={handleClick} />
                            </TextInputBox>
                            <div className="Signup-address-row">
                                <TextInputBox type="short" placeholder="상세주소" onChange={handleChange("address_detail")} />
                                <TextInputBox type="short" placeholder="우편번호" value={form.postal_code} onChange={handleChange("postal_code")} />
                            </div>
                        </div>

                        <label className="ageree-terms">
                            <input type="checkbox" className="check-box" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                            <div className="signup-option-text"> [필수] 서비스 이용약관 및 개인정보 수집에 동의합니다. </div>
                        </label>

                        {agreeError && <div className="signup-warning">{agreeError}</div>}

                        {error && <div className="signup-warning">{error}</div>}
                    </div>

                    <div className="login-card">
                        <TextButtonL content="회원가입" type="hover" onClick={handleSignup} />
                    </div>
                </div>
            </div>
        </div>
    );
}

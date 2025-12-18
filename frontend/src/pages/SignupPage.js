import React, { useState } from "react";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonL from "../ui/button/TextButtonL";
import SearchIcon from "../ui/icons/SearchIcon";
import FormDropdown from "../ui/input/FormDropdown";

export default function SignupPage() {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [agree, setAgree] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const handleSignup = () => {
        if (!agree) {
            setShowWarning(true);
            return;
        }
        setShowWarning(false);
        if (password !== passwordCheck) {
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
        alert("회원가입이 완료되었습니다.");
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
                        <TextInputBox content="아이디" type="long" placeholder="이메일" />
                        <TextInputBox content="비밀번호" type="long" placeholder="비밀번호" inputType="password" onChange={(e) => setPassword(e.target.value)} />
                        <TextInputBox content="비밀번호 확인" type="long" placeholder="비밀번호 확인" inputType="password" onChange={(e) => setPasswordCheck(e.target.value)} />
                        {passwordError && <span className="signup-warning">비밀번호가 일치하지 않습니다.</span>}
                        <div className="Signup-profile">
                            <TextInputBox content="이름" type="long" placeholder="이름" />
                            <FormDropdown content="성별" size="long" placeholder="성별" optionData={optionData} />
                            <TextInputBox content="생년월일" type="long" placeholder="생년월일(YYYYMMDD)" />
                            <TextInputBox content="거주지" type="long" placeholder="거주지">
                                <SearchIcon size={44} color="inherit" />
                            </TextInputBox>
                            <div className="Signup-address-row">
                                <TextInputBox content="상세주소" type="short" placeholder="상세주소" />
                                <TextInputBox content="우편번호" type="short" placeholder="우편번호" />
                            </div>
                        </div>
                        <label className="ageree-terms">
                            <input type="checkbox" className="check-box" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                            <span className="signup-option-text"> [필수] 서비스 이용약관 및 개인정보 수집에 동의합니다. </span>
                        </label>
                        {showWarning && <p className="signup-warning">필수 약관에 동의해 주세요.</p>}
                    </div>
                    <div className="login-card">
                        <TextButtonL content="회원가입" type="hover" onClick={handleSignup} />
                    </div>
                </div>
            </div>
        </div>
    );
}

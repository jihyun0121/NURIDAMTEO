import React from "react";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonL from "../ui/button/TextButtonL";

export default function SignupPage() {
    return (
        <div className="Signup-container">
            <Header />
            <div className="Signup-wrapper">
                <Logo size="l" />
                <div className="Signup-box">
                    <span className="Signup-title"> 회원가입 </span>
                    <div className="Signup-buttons">
                        <TextInputBox content="아이디" type="long" placeholder="아이디" />
                        <TextInputBox content="비밀번호" type="long" placeholder="비밀번호" inputType="password" />
                        <TextInputBox content="비밀번호 확인" type="long" placeholder="비밀번호 확인" inputType="password" />
                        <div className="Signup-options">
                            <label className="remember-id">
                                <input type="checkbox" className="check-box" />
                                <span className="signup-option-text">서비스 이용약관 및 개인정보 수집에 동의합니다. [필수] </span>
                            </label>
                        </div>
                    </div>

                    <div className="login-card">
                        <TextButtonL content="로그인" type="hover" />
                        <TextButtonL content="회원가입" />
                    </div>
                </div>
            </div>
        </div>
    );
}

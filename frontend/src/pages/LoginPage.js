import React from "react";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonL from "../ui/button/TextButtonL";
import EyeIcon from "../ui/icons/EyeIcon";

export default function LoginPage() {
    return (
        <div className="login-container">
            <Header />
            <div className="login-wrapper">
                <Logo size="l" />
                <div className="login-box">
                    <span className="login-title"> 로그인 </span>
                    <div className="login-buttons">
                        <TextInputBox content="아이디" type="long" placeholder="아이디" />

                        <TextInputBox content="비밀번호" type="long" placeholder="비밀번호" inputType="password">
                            <EyeIcon size={44} color="inherit" />
                        </TextInputBox>
                        <div className="login-options">
                            <label className="remember-id">
                                <input type="checkbox" className="check-box" />
                                <span className="login-option-text">아이디 기억하기</span>
                            </label>
                            <div className="login-option">
                                <span className="find-account">아이디/비밀번호 찾기</span>
                            </div>
                        </div>
                    </div>

                    <div className="login-card">
                        <TextButtonL content="로그인" type="hover" />
                        <TextButtonL content="회원가입" onClick={() => (window.location.href = "/signup")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

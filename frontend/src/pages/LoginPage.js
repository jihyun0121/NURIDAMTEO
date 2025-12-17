import React from "react";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonS from "../ui/button/TextButtonS";
import TextButtonL from "../ui/button/TextButtonL";

export default function LoginPage() {
    return (
        <div className="login-container">
            <Header />

            <div className="login-box">
                <Logo size="l" />

                <div className="login-buttons">
                    <TextInputBox
                        content="아이디"
                        type="long"
                        placeholder="아이디"
                    />
                    <TextInputBox
                        content="비밀번호"
                        type="long"
                        placeholder="비밀번호"
                        inputType="password"
                    />
                    <div className="login-options">
                        <span className="login-option-text">아이디 찾기</span>
                        <span className="login-option-text">비밀번호 찾기</span>
                    </div>
                </div>

                <div className="login-card">
                    <TextButtonL content="로그인" type="Fill" />
                    <TextButtonL content="회원가입" type="None" />
                </div>
            </div>
        </div>
    );
}

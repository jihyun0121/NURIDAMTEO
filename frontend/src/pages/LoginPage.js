import React from "react";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonS from "../ui/button/TextButtonS";

export default function LoginPage() {
    return (
        <>
            <div className="login-container">
                <Header />
                <div className="Login-box">
                    <Logo />
                    <h1> 로그인 </h1>
                    <TextInputBox content="아이디" />
                    <TextInputBox content="비밀번호" />

                    <TextButtonS content="로그인" type="Fill" />
                    <TextButtonS content="회원가입" type="None" />
                </div>
            </div>
        </>
    );
}

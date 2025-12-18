import React from "react";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonL from "../ui/button/TextButtonL";
import SearchIcon from "../ui/icons/SearchIcon";

export default function SignupPage() {
    return (
        <div className="Signup-container">
            <Header />
            <div className="Signup-wrapper">
                <Logo size="l" />
                <div className="Signup-box">
                    <span className="Signup-title"> 회원가입 </span>
                    <div className="Signup-buttons">
                        <TextInputBox content="아이디" type="long" placeholder="이메일" />
                        <TextInputBox content="비밀번호" type="long" placeholder="비밀번호" inputType="password" />
                        <TextInputBox content="비밀번호 확인" type="long" placeholder="비밀번호 확인" inputType="password" />
                        <div className="Signup-profile">
                            <TextInputBox content="이름" type="long" placeholder="이름" />
                            <TextInputBox content="성별" type="long" placeholder="성별" />
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
                            <input type="checkbox" className="check-box" />
                            <span className="signup-option-text"> [필수] 서비스 이용약관 및 개인정보 수집에 동의합니다. </span>
                        </label>
                    </div>

                    <div className="login-card">
                        <TextButtonL content="회원가입" type="hover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

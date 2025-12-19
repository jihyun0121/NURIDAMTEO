import { useState, useEffect } from "react";
import { UserAPI } from "../api/api";
import Header from "../components/Header";
import Logo from "../ui/Logo";
import TextInputBox from "../ui/input/TextInputBox";
import TextButtonL from "../ui/button/TextButtonL";
import EyeIcon from "../ui/icons/EyeIcon";

export default function LoginPage() {
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("savedEmail");
        if (saved) {
            setEmail(saved);
            setRemember(true);
        }
    }, []);

    async function handleLogin() {
        sessionStorage.removeItem("token");

        if (remember) {
            localStorage.setItem("savedEmail", email);
        } else {
            localStorage.removeItem("savedEmail");
        }

        if (!email || !password) {
            setError("아이디 또는 비밀번호를 입력해주세요.");
            return;
        }
        try {
            const res = await UserAPI.login({
                email: email,
                password: password,
            });

            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("user_id", res.data.user_id);

            console.log("로그인 성공");
            window.location.href = "/";
        } catch (e) {
            const msg = e.response.data.error || "로그인 실패";
            setError(msg);
        }
    }

    return (
        <div className="login-container">
            <Header />
            <div className="login-wrapper">
                <Logo size="l" />
                <div className="login-box">
                    <span className="login-title"> 로그인 </span>
                    <div className="login-buttons">
                        <TextInputBox type="long" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextInputBox type="long" placeholder="비밀번호" inputType={visible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}>
                            <EyeIcon isHide={visible} size={44} color="inherit" onClick={() => setVisible((v) => !v)} />
                        </TextInputBox>

                        {error && <div className="signup-warning">{error}</div>}

                        <div className="login-options">
                            <label className="remember-id">
                                <input type="checkbox" className="check-box" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                                <span className="login-option-text">이메일 기억하기</span>
                            </label>
                            <div className="login-option">
                                <span className="find-account">이메일/비밀번호 찾기</span>
                            </div>
                        </div>
                    </div>

                    <div className="login-card">
                        <TextButtonL content="로그인" type="hover" onClick={handleLogin} />
                        <TextButtonL content="회원가입" onClick={() => (window.location.href = "/signup")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

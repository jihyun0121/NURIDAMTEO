import { useEffect, useState } from "react";
import { UserAPI } from "../../api/api";
import Logo from "../../ui/Logo";
import AuthButton from "../../ui/button/AuthButton";
import Profile from "../../ui/Profile";
import ProfileButton from "../../ui/button/ProfileButton";
import CoinIcon from "../../ui/icons/CoinIcon";
import VoteIcon from "../../ui/icons/VoteIcon";
import BookmarkIcon from "../../ui/icons/BookmarkIcon";
import ProfileDetail from "./ProfileDetail";

export default function ProfileCard({ userId }) {
    const [user, setUser] = useState(null);
    const login = Boolean(userId);
    const [activeTab, setActiveTab] = useState("none");

    const handleTabClick = (tab) => {
        setActiveTab((prev) => (prev === tab ? "none" : tab));
    };

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await UserAPI.getUser(userId);
                setUser(res.data);
            } catch (e) {
                console.log("유저 정보 불러오기 실패", e);
            }
        }

        fetchUser();
    }, [userId]);

    if (!login) {
        return (
            <div className="profile-card-none">
                <Logo size="m" />
                <div className="profile-card-desc">로그인/ 회원가입 하고 더 많은 소식을 받아보세요!</div>

                <div className="profile-card-none-btn">
                    <AuthButton content="로그인" type="nuri" color="hover" onClick={() => (window.location.href = "/login")} />
                    <AuthButton content="회원가입" type="nuri" color="hover" onClick={() => (window.location.href = "/signup")} />
                </div>
            </div>
        );
    }

    return (
        <div className="profile-card-container">
            <div className="profile-card-header">
                <Profile user={user} />
                <AuthButton
                    content="로그아웃"
                    type="guruem"
                    color="hover"
                    onClick={() => {
                        sessionStorage.clear();
                        window.location.href = "/";
                    }}
                />
            </div>

            <div className="profile-card-menu">
                <ProfileButton content="마일리지" active={activeTab === "coin"} onClick={() => handleTabClick("coin")}>
                    <CoinIcon size={44} color="inherit" />
                </ProfileButton>

                <ProfileButton content="제안" active={activeTab === "vote"} onClick={() => handleTabClick("vote")}>
                    <VoteIcon variant="line" size={44} color="inherit" />
                </ProfileButton>

                <ProfileButton content="북마크" active={activeTab === "bookmark"} onClick={() => handleTabClick("bookmark")}>
                    <BookmarkIcon size={44} variant="line" color="inherit" />
                </ProfileButton>
            </div>

            <ProfileDetail mileage={user?.total_mileage} type={activeTab} />

            <div className="profile-card-footer">
                <AuthButton content="마이페이지" type="nuri" />
            </div>
        </div>
    );
}

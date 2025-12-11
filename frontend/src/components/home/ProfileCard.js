import { useState } from "react";
import Logo from "../../ui/Logo";
import AuthButton from "../../ui/button/AuthButton";
import Profile from "../../ui/Profile";
import ProfileButton from "../../ui/button/ProfileButton";
import CoinIcon from "../../ui/icons/CoinIcon";
import VoteIcon from "../../ui/icons/VoteIcon";
import BookmarkIcon from "../../ui/icons/BookmarkIcon";
import ProfileDetail from "./ProfileDetail";

export default function ProfileCard() {
    const login = true;
    let content = null;

    const userId = 1;
    const mileage = 6420;

    const [activeTab, setActiveTab] = useState("none");

    const handleTabClick = (tab) => {
        setActiveTab((prev) => (prev === tab ? "none" : tab));
    };

    if (login === false) {
        content = (
            <>
                <div className="profile-card-none">
                    <Logo size="m" />
                    <div className="profile-card-desc">로그인/ 회원가입 하고 더 많은 소식을 받아보세요!</div>

                    <div className="profile-card-none-btn">
                        <AuthButton content="로그인" type="nuri" color="hover" />
                        <AuthButton content="회원가입" type="nuri" color="hover" />
                    </div>
                </div>
            </>
        );
    } else if (login === true) {
        content = (
            <>
                <div className="profile-card-container">
                    <div className="profile-card-header">
                        <Profile userId={userId} />
                        <AuthButton content="로그아웃" type="guruem" color="hover" />
                    </div>

                    <div className="profile-card-menu">
                        <ProfileButton content="마일리지" active={activeTab === "coin"} onClick={() => handleTabClick("coin")}>
                            <CoinIcon size={44} color="inherit" />
                        </ProfileButton>

                        <ProfileButton content="제안" active={activeTab === "vote"} onClick={() => handleTabClick("vote")}>
                            <VoteIcon size={44} color="inherit" />
                        </ProfileButton>

                        <ProfileButton content="북마크" active={activeTab === "bookmark"} onClick={() => handleTabClick("bookmark")}>
                            <BookmarkIcon size={44} variant="line" color="inherit" />
                        </ProfileButton>
                    </div>

                    <ProfileDetail mileage={mileage} type={activeTab} />

                    <div className="profile-card-footer">
                        <AuthButton content="로그아웃" type="nuri" />
                    </div>
                </div>
            </>
        );
    }

    return <>{content}</>;
}

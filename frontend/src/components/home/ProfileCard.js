import { useState } from "react";
import AuthButton from "../../ui/button/AuthButton";
import Profile from "../../ui/Profile";
import ProfileButton from "../../ui/button/ProfileButton";
import CoinIcon from "../../ui/icons/CoinIcon";
import VoteIcon from "../../ui/icons/VoteIcon";
import BookmarkIcon from "../../ui/icons/BookmarkIcon";
import ProfileDetail from "./ProfileDetail";

export default function ProfileCard() {
    const userId = 1;
    const mileage = 6420;

    const [activeTab, setActiveTab] = useState(null);

    const handleToggle = (tab) => {
        setActiveTab((prev) => (prev === tab ? null : tab));
    };

    return (
        <div className="profile-card-container">
            <div className="profile-card-header">
                <Profile userId={userId} />
                <AuthButton content="로그아웃" type="guruem" color="hover" />
            </div>

            <div className="profile-card-menu">
                <ProfileButton content="마일리지" isActive={activeTab === "coin"} onClick={() => handleToggle("coin")}>
                    <CoinIcon size={44} color="inherit" />
                </ProfileButton>

                <ProfileButton content="제안" isActive={activeTab === "vote"} onClick={() => handleToggle("vote")}>
                    <VoteIcon size={44} color="inherit" />
                </ProfileButton>

                <ProfileButton content="북마크" isActive={activeTab === "bookmark"} onClick={() => handleToggle("bookmark")}>
                    <BookmarkIcon size={44} variant="line" color="inherit" />
                </ProfileButton>
            </div>

            <ProfileDetail mileage={mileage} type={activeTab} />

            <div className="profile-card-footer">
                <AuthButton content="로그아웃" type="nuri" />
            </div>
        </div>
    );
}

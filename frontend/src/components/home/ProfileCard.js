import AuthButton from "../../ui/button/AuthButton";
import Profile from "../../ui/Profile";
import ProfileButton from "../../ui/button/ProfileButton";
import CoinIcon from "../../ui/icons/CoinIcon";
import VoteIcon from "../../ui/icons/VoteIcon";
import BookmarkIcon from "../../ui/icons/BookmarkIcon";
import ProfleDetail from "./ProfleDetail";

export default function ProfileCard() {
    const userId = 1;
    const mileage = 6420;

    return (
        <div className="profile-card-container">
            <div className="profile-card-header">
                <Profile userId={userId} />
                <AuthButton content="로그아웃" type="guruem" color="hover" />
            </div>
            <div className="profile-card-menu">
                <ProfileButton content="마일리지">
                    <CoinIcon size={44} color="inherit" />
                </ProfileButton>
                <ProfileButton content="제안">
                    <VoteIcon size={44} color="inherit" />
                </ProfileButton>
                <ProfileButton content="북마크">
                    <BookmarkIcon size={44} variant="line" color="inherit" />
                </ProfileButton>
            </div>
            <ProfleDetail mileage={mileage} />
            <div className="profile-card-footer">
                <AuthButton content="로그아웃" type="nuri" />
            </div>
        </div>
    );
}

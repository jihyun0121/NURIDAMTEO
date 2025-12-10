import LevelLabel from "./LevelLabel";
import { ReactComponent as UserProfile } from "../assets/image/profile/User_Icon.svg";

export default function Profile({ userId }) {
    const email = "username@naver.com";
    const name = "User Name";
    const level = 1;
    const profile = <UserProfile />;
    const type = "guruem";

    return (
        <div className="profile">
            <div className="profile-img">{profile}</div>
            <div className="profile-text">
                <div className="profile-name">
                    <LevelLabel level={level} type={type} />
                    {name}님
                </div>
                <div className="profile-email">{email}</div>
            </div>
        </div>
    );
}

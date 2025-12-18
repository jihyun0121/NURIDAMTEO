import LevelLabel from "./LevelLabel";

export default function Profile({ user }) {
    if (!user) return null;

    const { email, name, level } = user;
    const profileImage = (
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
            <path d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62C13.8792 62 0 48.1208 0 31Z" fill="#F1F1F1" />
            <path d="M31 32.4091C35.6693 32.4091 39.4545 28.6239 39.4545 23.9545C39.4545 19.2852 35.6693 15.5 31 15.5C26.3306 15.5 22.5454 19.2852 22.5454 23.9545C22.5454 28.6239 26.3306 32.4091 31 32.4091Z" stroke="#595959" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.6818 46.5C43.6818 42.7628 42.3456 39.1787 39.9673 36.5362C37.589 33.8936 34.3634 32.4091 30.9999 32.4091C27.6365 32.4091 24.4108 33.8936 22.0325 36.5362C19.6542 39.1787 18.3181 42.7628 18.3181 46.5" stroke="#595959" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className="profile">
            <div className="profile-img">{profileImage}</div>
            <div className="profile-text">
                <div className="profile-name">
                    <LevelLabel level={level} type="guruem" />
                    {name}님
                </div>
                <div className="profile-email">{email}</div>
            </div>
        </div>
    );
}

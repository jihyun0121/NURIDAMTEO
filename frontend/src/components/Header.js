import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import SearchIcon from "../ui/icons/SearchIcon";
import BellIcon from "../ui/icons/BellIcon";
import HeaderButton from "../components/HeaderButton";
import BellPopup from "./home/BellPopUp";
import { NotificationAPI } from "../api/api";
import { useNotificationRefresh } from "./proposal/NotificationContext";
import UserIcon from "../ui/icons/UserIcon";

export default function Header({ style }) {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("user_id");

    const [isBellOpen, setIsBellOpen] = useState(false);
    const [hasUnread, setHasUnread] = useState(false);

    const { refreshKey } = useNotificationRefresh();

    useEffect(() => {
        fetchUnread();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, refreshKey]);

    const activeTab = pathname.startsWith("/participate") ? "join" : pathname.startsWith("/proposal") ? "prop" : pathname.startsWith("/nurisodam") ? "nuri" : "none";

    useEffect(() => {
        document.body.style.overflow = isBellOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isBellOpen]);

    const fetchUnread = async () => {
        if (!token || !userId) {
            setHasUnread(false);
            return;
        }

        const res = await NotificationAPI.getNotifications(userId);
        const list = res.data ?? [];
        setHasUnread(list.some((n) => n.is_read === false));
    };

    useEffect(() => {
        fetchUnread();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleBellClick = async () => {
        if (!token || !userId) {
            navigate("/login");
            return;
        }

        setIsBellOpen((prev) => !prev);

        if (hasUnread) {
            await NotificationAPI.readNotification(userId);
            setHasUnread(false);
        }
    };

    const HeaderIcons = ({ hasUnread, handleBellClick }) => {
        const navigate = useNavigate();
    };

    return (
        <>
            <div className="header-container" style={{ ...style }}>
                {isBellOpen && <BellPopup onClose={() => setIsBellOpen(false)} onRefresh={fetchUnread} />}

                <div style={{ cursor: "pointer" }} onClick={() => (window.location.href = "/")}>
                    <Logo size="m" />
                </div>

                <div className="header-menu">
                    <HeaderButton content={"참여하기"} active={activeTab === "join"} onClick={() => (window.location.href = "/participate")} />
                    <HeaderButton content={"시민제안"} active={activeTab === "prop"} onClick={() => (window.location.href = "/proposal")} />
                    <HeaderButton content={"누리소담"} active={activeTab === "nuri"} onClick={() => (window.location.href = "/nurisodam")} />
                </div>

                <div className="header-icons">
                    <SearchIcon size={44} type="fill" />
                    <BellIcon size={44} type={hasUnread ? "hover" : "fill"} onClick={handleBellClick} style={{ cursor: "pointer" }} />
                    <UserIcon size={44} type="fill" onClick={() => (window.location.href = "/my")} style={{ cursor: "pointer" }} />
                </div>
            </div>
        </>
    );
}

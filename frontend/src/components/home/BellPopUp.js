import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationAPI } from "../../api/api";
import HeartIcon from "../../ui/icons/HeartIcon";
import ChatIcon from "../../ui/icons/ChatIcon";
import CoinIcon from "../../ui/icons/CoinIcon";
import AlarmBox from "./AlarmBox";

export default function BellPopUp({ onClose, onRefresh }) {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    const formatTime = (isoString) => {
        if (!isoString) return "";
        const d = new Date(isoString);
        const pad = (n) => String(n).padStart(2, "0");
        return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };

    const getIcon = (type) => {
        if (type === "LIKE") return <HeartIcon size={44} type="hover" />;
        if (type === "COMMENT") return <ChatIcon size={44} type="hover" />;
        if (type === "MILEAGE") return <CoinIcon size={44} type="hover" />;
        return <HeartIcon size={44} type="hover" />;
    };

    const handleClick = (n) => {
        if (n.notification_type === "LIKE" || n.notification_type === "COMMENT") {
            if (n.proposal_id) {
                navigate(`/proposal/${n.proposal_id}`);
                onClose?.();
            }
            return;
        }

        if (n.notification_type === "MILEAGE") {
            navigate("/my");
            onClose?.();
        }
    };

    useEffect(() => {
        const fetchNotifications = async () => {
            const token = sessionStorage.getItem("token");
            const userId = sessionStorage.getItem("user_id");
            if (!token || !userId) {
                setNotifications([]);
                setLoading(false);
                return;
            }

            try {
                const res = await NotificationAPI.getNotifications(userId);
                setNotifications(res.data ?? []);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    useEffect(() => {
        const markAsRead = async () => {
            const token = sessionStorage.getItem("token");
            const userId = sessionStorage.getItem("user_id");
            if (!token || !userId) return;

            await NotificationAPI.readNotification(userId);
            onRefresh?.();
        };

        markAsRead();
    }, [onRefresh]);

    return (
        <div className="notification-popup-container" onClick={onClose}>
            <span className="notification-popup-title">알림</span>

            <div className="notification-popup-content" onClick={(e) => e.stopPropagation()}>
                {loading && <div className="notification-empty">불러오는 중...</div>}

                {!loading && notifications.length === 0 && <div className="notification-empty">알림이 없습니다.</div>}

                {!loading &&
                    notifications.map((n) => (
                        <AlarmBox key={n.notification_id} content={n.message} time={formatTime(n.created_at)} onClick={() => handleClick(n)}>
                            {getIcon(n.notification_type)}
                        </AlarmBox>
                    ))}
            </div>
        </div>
    );
}

import { useMemo } from "react";

export default function Comment({ user, createdAt, content }) {
    const masked = useMemo(() => {
        if (!user) return "";
        if (user.length === 1) return user;
        if (user.length === 2) return user[0] + "*";
        return user[0] + "*".repeat(user.length - 2) + "*".repeat(user.length - 2);
    }, [user]);

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}.${m}.${d}`;
    };

    return (
        <div className="comment-wraper">
            <div className="comment-name">
                {masked}
                <p>{formatDate(createdAt)}</p>
            </div>
            <div className="comment-content">{content}</div>
        </div>
    );
}

export default function NoticeLabel({ children, text, subText }) {
    return (
        <div className="notice-label">
            <div>{children}</div>
            <div>
                <div className="notice-text">{text}</div>
                <div className="notice-sub">{subText}</div>
            </div>
        </div>
    );
}

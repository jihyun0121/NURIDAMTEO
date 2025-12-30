export default function AlarmBox({ content, time, children, onClick }) {
    return (
        <div className="alarm-container" onClick={onClick}>
            <div className="alarm-text">
                {children}
                {content}
            </div>
            <div className="alarm-time">{time}</div>
        </div>
    );
}

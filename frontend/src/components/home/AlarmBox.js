export default function AlarmBox({ content, time, children }) {
    return (
        <div className="alarm-container">
            <div className="alarm-text">
                {children}
                {content}
            </div>
            <div className="alarm-time">
                {time}
            </div>
        </div>
    );
}

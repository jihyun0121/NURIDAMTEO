export default function TextInputBox({ children, type = "short", onClick }) {
    const styles = {
        width: type === "short" ? "none" : "648px",
    };

    return (
        <div className="text-input-box" style={styles} onClick={onClick}>
            <input className="text-input" placeholder="Text"></input>
            {children}
        </div>
    );
}

export default function TextInputBox({
    children,
    type = "short",
    onClick,
    placeholder,
}) {
    const styles = {
        width: type === "short" ? "19.75rem" : "40.5rem",
    };

    return (
        <div className="text-input-box" style={styles} onClick={onClick}>
            <input className="text-input" placeholder={placeholder}></input>
            {children}
        </div>
    );
}

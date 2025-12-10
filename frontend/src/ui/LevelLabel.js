import BadgeIcon from "./icons/BadgeIcon";

export default function AuthButton({ level, type = "sodam" }) {
    return (
        <button className="level-label">
            <BadgeIcon type={type} size="23" />
            Level. {level}
        </button>
    );
}

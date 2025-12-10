import BadgeIcon from "./icons/BadgeIcon";

export default function LevelLabel({ level, type = "sodam" }) {
    return (
        <button className="level-label">
            <BadgeIcon type={type} size="23" />
            Level. {level}
        </button>
    );
}

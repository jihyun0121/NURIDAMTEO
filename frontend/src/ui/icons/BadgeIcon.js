import { ReactComponent as Guruem } from "../../assets/image/Guruem-1.svg";
import { ReactComponent as Sodam } from "../../assets/image/Sodam-1.svg";
import { ReactComponent as Nuri } from "../../assets/image/Nuri-1.svg";

const ICON_MAP = {
    guruem: Guruem,
    sodam: Sodam,
    nuri: Nuri,
};

export default function BadgeIcon({ type = "user", size = 44 }) {
    const IconComponent = ICON_MAP[type.toLowerCase()];

    if (!IconComponent) return null;

    return (
        <div style={{ width: size, height: size }}>
            <IconComponent width={size} height={size} />
        </div>
    );
}

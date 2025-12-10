import { ReactComponent as Guruem } from "../../assets/image/icon/Guruem-1.svg";
import { ReactComponent as Sodam } from "../../assets/image/icon/Sodam-1.svg";
import { ReactComponent as Nuri } from "../../assets/image/icon/Nuri-1.svg";

const ICON_MAP = {
    guruem: Guruem,
    sodam: Sodam,
    nuri: Nuri,
};

export default function BadgeIcon({ type = "user", size }) {
    const IconComponent = ICON_MAP[type.toLowerCase()];

    if (!IconComponent) return null;
    return <IconComponent width={size} height={size} />;
}

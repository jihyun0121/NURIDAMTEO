import { ReactComponent as User } from "../../assets/image/icon/User.svg";
import { ReactComponent as Guruem } from "../../assets/image/icon/Guruem.svg";
import { ReactComponent as Sodam } from "../../assets/image/icon/Sodam.svg";
import { ReactComponent as Nuri } from "../../assets/image/icon/Nuri.svg";

const ICON_MAP = {
    user: User,
    guruem: Guruem,
    sodam: Sodam,
    nuri: Nuri,
};

export default function NuridamIcon({ type = "user", size }) {
    const IconComponent = ICON_MAP[type.toLowerCase()];

    if (!IconComponent) return null;

    return <IconComponent width={size} height={size} />;
}

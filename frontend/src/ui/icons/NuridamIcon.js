import { ReactComponent as UserIcon } from "../../assets/image/User.svg";
import { ReactComponent as Guruem } from "../../assets/image/Guruem.svg";
import { ReactComponent as Sodam } from "../../assets/image/Sodam.svg";
import { ReactComponent as Nuri } from "../../assets/image/Nuri.svg";

const ICON_MAP = {
    user: UserIcon,
    guruem: Guruem,
    sodam: Sodam,
    nuri: Nuri,
};

export default function NuridamIcon({ type = "user", size }) {
    const IconComponent = ICON_MAP[type.toLowerCase()];

    if (!IconComponent) return null;

    return (
        <div style={{ width: size, height: size }}>
            <IconComponent width={size} height={size} />
        </div>
    );
}

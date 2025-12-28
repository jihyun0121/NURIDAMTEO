import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../ui/Logo";
import SearchIcon from "../ui/icons/SearchIcon";
import BellIcon from "../ui/icons/BellIcon";
import Icon from "../ui/icons/TextIcon";
import HeaderButton from "../components/HeaderButton";
import BellPopup from "./home/BellPopUp";

export default function Header({ style }) {
    const location = useLocation();
    const pathname = location.pathname;

    const [isBellOpen, setIsBellOpen] = useState(false);

    const activeTab = pathname.startsWith("/participate") ? "join" : pathname.startsWith("/proposal") ? "prop" : pathname.startsWith("/nurisodam") ? "nuri" : "none";

    useEffect(() => {
        document.body.style.overflow = isBellOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isBellOpen]);

    return (
        <>
            {isBellOpen && <BellPopup onClose={() => setIsBellOpen(false)} />}

            <div className="header-container" style={{ ...style }}>
                <div style={{ cursor: "pointer" }} onClick={() => (window.location.href = "/")}>
                    <Logo size="m" />
                </div>

                <div className="header-menu">
                    <HeaderButton content={"참여하기"} active={activeTab === "join"} onClick={() => (window.location.href = "/participate")} />
                    <HeaderButton content={"시민제안"} active={activeTab === "prop"} onClick={() => (window.location.href = "/proposal")} />
                    <HeaderButton content={"누리소담"} active={activeTab === "nuri"} onClick={() => (window.location.href = "/nurisodam")} />
                </div>

                <div className="header-icons">
                    <SearchIcon size={44} type="fill" />
                    <BellIcon size={44} type="fill" onClick={() => setIsBellOpen((prev) => !prev)} />
                    <Icon size={44} type="fill" />
                </div>
            </div>
        </>
    );
}

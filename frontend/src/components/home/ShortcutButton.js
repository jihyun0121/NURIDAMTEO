import { colors } from "../../assets/style/tokens/colors";
import Logo from "../../ui/Logo";
import { ReactComponent as Nuri } from "../../assets/image/home/Nuri.svg";
import { ReactComponent as Sodam } from "../../assets/image/home/Sodam.svg";
import ArrowIcon from "../../ui/icons/ArrowIcon";

export default function ShortcutButton() {
    return (
        <>
            <div style={{ display: "flex", boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.10)", borderRadius: "1.5rem" }}>
                <div className="shortcut-btn-left" onClick={() => (window.location.href = "/participate")}>
                    <div className="shortcut-title">
                        <Logo size="s" color={colors.orange.dark.base} />
                        빠른 설문조사
                    </div>
                    <Nuri />
                    <button className="shortcut-button">
                        바로가기
                        <ArrowIcon direction="right" size={44} color={colors.white} />
                    </button>
                </div>
                <div className="shortcut-btn-right" onClick={() => (window.location.href = "/propsal")}>
                    <div className="shortcut-title">
                        <Logo size="s" color={colors.yellow.dark.base} />
                        제안하기
                    </div>
                    <Sodam />
                    <button className="shortcut-button" style={{ backgroundColor: colors.yellow.dark.base }}>
                        바로가기
                        <ArrowIcon direction="right" size={44} color={colors.white} />
                    </button>
                </div>
            </div>
        </>
    );
}

// import { useLocation } from "react-router-dom";
import NuridamIcon from "../../ui/icons/NuridamIcon";
import { colors } from "../../assets/style/tokens/colors";
import PropsalCard from "./PropsalCard";

export default function PropsalList() {
    // const location = useLocation();

    return (
        <div className="propsal-list-container">
            <div className="propsal-list-title">
                <NuridamIcon type="sodam" size={64} />
                <div>
                    <span style={{ color: colors.orange.normal.hover }}>토론에 참여</span>하고 누리소담시에게<span style={{ color: colors.orange.normal.hover }}>의견을 들려주세요!</span>
                </div>
            </div>

            <div className="propsal-list-cards">
                <div className="propsal-list-card">
                    <PropsalCard type="light" />
                </div>
                <div className="propsal-list-card">
                    <PropsalCard type="light" />
                </div>
                <div className="propsal-list-card">
                    <PropsalCard type="light" />
                </div>
                <div className="propsal-list-card">
                    <PropsalCard type="light" />
                </div>
            </div>
        </div>
    );
}

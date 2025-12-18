// import { useLocation } from "react-router-dom";
import NuridamIcon from "../../ui/icons/NuridamIcon";
import { colors } from "../../assets/style/tokens/colors";

export default function PropsalList() {
    // const location = useLocation();

    return (
        <div className="propsal-list-container">
            <div className="propsal-list-title">
                <NuridamIcon type="sodam" size={64} />
                <span style={{ color: colors.orange.normal.hover }}>토론에 참여</span>
                하고 누리소담시에게
                <span style={{ color: colors.orange.normal.hover }}>의견을 들려주세요!</span>
            </div>

            <div className="propsal-list-card"></div>
        </div>
    );
}

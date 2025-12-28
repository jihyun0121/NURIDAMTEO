
import { colors } from "../../assets/style/tokens/colors";
import Logo from "../../ui/Logo";
import TextButtonS from "../../ui/button/TextButtonS";
import MileageStatus from "./MileageStatus";

export default function MyList({ title, asc, desc, type = "mileage", userId }) {
    return (
        <div className="my-list-container">
            <div className="my-list-title">
                <p>{title}</p>
                <div className="my-list-sort-btn">
                    <p>{asc}</p>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="my-list">
                <MileageStatus />
                <MileageStatus />
                <MileageStatus />
                <MileageStatus />
                <MileageStatus />
                <MileageStatus />
                <MileageStatus />
            </div>
        </div>
    );
}

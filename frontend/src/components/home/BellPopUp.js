import HeartIcon from "../../ui/icons/HeartIcon";
import AlarmBox from "./AlarmBox";

export default function BellPopUp({ onClose }) {
    return (
        <div className="notification-popup-container" onClick={onClose}>
            <sapn className="notification-popup-title">알림</sapn>
            <div className="notification-popup-content" onClick={(e) => e.stopPropagation()}>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
                <AlarmBox content={"회원님의 제안에 새로운 공감이 달렸습니다"} time={"2000.00.00 00:00"}>
                    <HeartIcon size={44} type="hover" />
                </AlarmBox>
            </div>
        </div>
    );
}

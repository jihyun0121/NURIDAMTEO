import { useState, useEffect } from "react";
import { AttendanceAPI, MileageAPI, NotificationAPI, UserAPI } from "../api/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useNotificationRefresh } from "../components/proposal/NotificationContext";
import { colors } from "../assets/style/tokens/colors";
import Header from "../components/Header";
import Profile from "../ui/Profile";
import MyPageButton from "../ui/button/MyPageButton";
import UpdateForm from "../components/my/UpdateForm";
import CheckIcon from "../ui/icons/CheckIcon";
import CoinIcon from "../ui/icons/CoinIcon";
import VoteIcon from "../ui/icons/VoteIcon";
import BookmarkIcon from "../ui/icons/BookmarkIcon";
import SettingIcon from "../ui/icons/SettingIcon";
import SettingForm from "../components/my/SettingForm";
import MileageButton from "../ui/button/MileageButton";
import MyList from "../components/my/MyList";

export default function MyPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [user, setUser] = useState(null);

    const { refreshNotifications } = useNotificationRefresh();

    const urlType = searchParams.get("type");

    const [type, setType] = useState(urlType || "mileage");

    useEffect(() => {
        if (urlType) setType(urlType);
    }, [urlType]);

    const userId = sessionStorage.getItem("user_id");

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await UserAPI.getUser(userId);
                setUser(res.data);
            } catch (e) {
                console.log("유저 정보 불러오기 실패", e);
            }
        }
        fetchUser();
    }, [userId]);

    const handleAttendance = async () => {
        if (!userId) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        try {
            const todayRes = await AttendanceAPI.getTodayAttendance(userId);

            if (todayRes.data) {
                alert("오늘은 이미 출석체크를 했습니다!");
                return;
            }

            await AttendanceAPI.checkAttendance(userId);

            const res = await UserAPI.getUser(userId);

            let mileage = 20;
            if (res.data.level_id === 1) mileage = 20;
            else if (res.data.level_id === 2) mileage = 50;
            else if (res.data.level_id === 3) mileage = 100;

            if (user.notification_enabled === true) {
                try {
                    const dto = {
                        user_id: Number(userId),
                        message: `출석체크 ${mileage} 마일리지가 지급되었습니다.`,
                        notification_type: "MILEAGE",
                    };

                    await NotificationAPI.createNotifications(dto);
                    refreshNotifications();
                } catch (e) {
                    console.log("알림 생성 실패", e);
                }
            }

            try {
                const dto = {
                    user_id: Number(userId),
                    mileage: mileage,
                    reason_detail: "출석체크 마일리지 지급",
                };

                await MileageAPI.addMileage(dto);
            } catch (e) {
                console.log("마일리지 지급 실패", e);
            }

            alert("출석체크 완료!");
        } catch (e) {
            const msg = e.response?.data?.message || "출석체크 중 오류가 발생했습니다.";

            if (msg.includes("이미 출석")) {
                alert("오늘은 이미 출석체크를 했습니다!");
            } else {
                alert(msg);
            }
        }
    };

    let content = null;

    if (type === "update") {
        content = (
            <div className="my-update">
                <span className="my-titles">회원정보 수정</span>
                <UpdateForm user={user} userId={userId} />
            </div>
        );
    } else if (type === "mileage") {
        content = (
            <div className="my-mileage">
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <span className="my-titles">마일리지</span>
                    <div className="my-description">
                        <p>매월 1일 오전 9시 부터 선착순 전환신청</p>
                        <p>1일 월 1만원, 신청 기간일로부터 30일내 지급</p>
                        <p>마일리지 유효기간 : 지급일로부터 1년</p>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div className="my-mileage-total">
                        <p>보유 마일리지</p>
                        <p className="my-mileage-mileages">{user?.total_mileage}M</p>
                    </div>
                    <div className="my-mileage-buttons">
                        <MileageButton content="누리담페이 전환" />
                        <MileageButton content="온누리상품권 전환" />
                        <MileageButton content="기부 신청" />
                    </div>
                </div>
                <MyList title={"보상 내역"} asc={"지급순"} desc={"최신순"} userId={userId} />
            </div>
        );
    } else if (type === "proposal") {
        content = <MyList title={"나의 제안 현황"} asc={"오래된순"} desc={"최신순"} type={"proposal"} userId={userId} />;
    } else if (type === "participate") {
        content = <MyList title={"나의 참여내역"} asc={"오래된순"} desc={"최신순"} type={"participate"} userId={userId} />;
    } else if (type === "bookmark") {
        content = <MyList title={"즐겨찾기"} asc={"제안"} desc={"공지사항"} type={"bookmark"} userId={userId} />;
    } else if (type === "setting") {
        content = (
            <div className="my-setting">
                <p className="my-titles">설정</p>
                <SettingForm user={user} userId={userId} />
            </div>
        );
    }

    return (
        <div className="my-container">
            <Header style={{ backgroundColor: colors.orange.light.base }} />
            <div className="my-content">
                <p className="my-title">마이페이지</p>
                <div className="my-contents">
                    <div className="my-menu">
                        <div className="my-menu-content">
                            <Profile user={user} />
                            <MyPageButton content="회원정보 수정" onClick={() => setType("update")} />
                        </div>
                        <div className="my-menu-content">
                            <MyPageButton type="line" content="출석체크" arrow={false} onClick={handleAttendance}>
                                <CheckIcon size={44} color="inherit" />
                            </MyPageButton>
                        </div>
                        <div className="my-menu-content">
                            <MyPageButton type={type === "mileage" ? "hover" : "default"} content="마일리지" arrow={false} onClick={() => setType("mileage")}>
                                <CoinIcon size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton type={type === "proposal" ? "hover" : "default"} content="제안현황" arrow={false} onClick={() => setType("proposal")}>
                                <VoteIcon variant="line" size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton type={type === "participate" ? "hover" : "default"} content="참여내역" arrow={false} onClick={() => setType("participate")}>
                                <VoteIcon size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton type={type === "bookmark" ? "hover" : "default"} content="즐겨찾기" arrow={false} onClick={() => setType("bookmark")}>
                                <BookmarkIcon size={44} color="inherit" />
                            </MyPageButton>
                        </div>
                        <div className="my-menu-content" style={{ boxShadow: "none", paddingBottom: 0 }}>
                            <MyPageButton type={type === "setting" ? "hover" : "default"} content="설정" arrow={false} onClick={() => setType("setting")}>
                                <SettingIcon size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton
                                content="로그아웃"
                                arrow={false}
                                onClick={() => {
                                    sessionStorage.clear();
                                    window.location.href = "/";
                                }}
                            >
                                <CheckIcon size={44} color="inherit" />
                            </MyPageButton>
                        </div>
                    </div>
                    <div style={{ width: "100%" }}>{content}</div>
                </div>
            </div>
        </div>
    );
}

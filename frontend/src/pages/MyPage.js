import { useState, useEffect } from "react";
import { UserAPI } from "../api/api";
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

export default function MyPage() {
    const [user, setUser] = useState(null);
    const [type, setType] = useState("update");

    const token = sessionStorage.getItem("token");
    const login = !!token;
    const userId = sessionStorage.getItem("user_id");

    useEffect(() => {
        if (!userId) return;

        async function fetchUser() {
            try {
                const res = await UserAPI.getUser(userId);
                setUser(res.data);
                console.log(res.data);
            } catch (e) {
                console.log("유저 정보 불러오기 실패", e);
            }
        } fetchUser();
    }, [userId]);


    let content = null;

    if (type === "update") {
        content = (
            <div className="my-update">
                <span className="Signup-title">회원정보 수정</span>
                <UpdateForm user={user} userId={userId} />
            </div>
        );
    } else if (type === "mileage") {
        content = (
            <div>
                <p>마일리지</p>
                <div>
                    <p>매월 1일 오전 9시 부터 선착순 전환신청</p>
                    <p>1일 월 1만원, 신청 기간일로부터 30일내 지급</p>
                    <p>마일리지 유효기간 : 지급일로부터 1년</p>
                </div>
                <div>보유 마일리지</div>
                <div>
                    <div>누리담페이 전환</div>
                    <div>온누리상품권 전환</div>
                    <div>기부 신청</div>
                </div>
                <div>
                    <p>보상 내역</p>
                    <p>지급순</p>
                    <p>최신순</p>
                </div>
                <div></div>
            </div>
        );
    } else if (type === "propsal") {
        content = (
            <div>
                <div>
                    <p>나의 제안 현황</p>
                    <p>오래된순</p>
                    <p>최신순</p>
                </div>
                <div></div>
            </div>
        );
    } else if (type === "participate") {
        content = (
            <div>
                <div>
                    <p>나의 참여내역</p>
                    <p>오래된순</p>
                    <p>최신순</p>
                </div>
                <div></div>
            </div>
        );
    } else if (type === "bookmark") {
        content = (
            <div>
                <div>
                    <p>즐겨찾기</p>
                    <p>오래된순</p>
                    <p>최신순</p>
                </div>
                <div></div>
            </div>
        );
    } else if (type === "setting") {
        content = (
            <div className="my-setting">
                <p className="Signup-title">설정</p>
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
                            <MyPageButton type="line" content="출석체크" arrow={false}>
                                <CheckIcon size={44} color="inherit" />
                            </MyPageButton>
                        </div>
                        <div className="my-menu-content">
                            <MyPageButton type={type === "mileage" ? "hover" : "default"} content="마일리지" arrow={false} onClick={() => setType("mileage")}>
                                <CoinIcon size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton type={type === "propsal" ? "hover" : "default"} content="제안현황" arrow={false} onClick={() => setType("propsal")}>
                                <VoteIcon variant="line" size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton type={type === "participate" ? "hover" : "default"} content="참여내역" arrow={false} onClick={() => setType("participate")}>
                                <VoteIcon size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton type={type === "bookmark" ? "hover" : "default"} content="북마크" arrow={false} onClick={() => setType("bookmark")}>
                                <BookmarkIcon size={44} color="inherit" />
                            </MyPageButton>
                        </div>
                        <div className="my-menu-content" style={{ boxShadow: "none", paddingBottom: 0 }}>
                            <MyPageButton type={type === "setting" ? "hover" : "default"} content="설정" arrow={false} onClick={() => setType("setting")}>
                                <SettingIcon size={44} color="inherit" />
                            </MyPageButton>
                            <MyPageButton content="로그아웃" arrow={false}
                                onClick={() => {
                                    sessionStorage.clear();
                                    window.location.href = "/";
                                }}
                            >
                                <CheckIcon size={44} color="inherit" />
                            </MyPageButton>
                        </div>
                    </div>
                    <div>{content}</div>
                </div>
            </div>
        </div >
    );
}

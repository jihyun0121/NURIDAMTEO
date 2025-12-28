import { useState, useEffect } from "react";
import { UserAPI } from "../api/api";
import { colors } from "../assets/style/tokens/colors";
import Header from "../components/Header";
import Profile from "../ui/Profile";
import MyPageButton from "../ui/button/MyPageButton";
import UpdateForm from "../components/my/UpdateForm";

export default function MyPage() {
    const [user, setUser] = useState(null);
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
    let type = "update";

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
            <div>
                <p>설정</p>
                <div>알림 끄기</div>
                <div>접근성 모드</div>
                <div>이용약관 및 개인정보 처리 안내</div>
                <div>로그아웃</div>
                <div>회원 탈퇴</div>
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
                            <MyPageButton />
                            <div>회원정보 수정</div>
                        </div>
                        <div className="my-menu-content">
                            <div>출석체크</div>
                        </div>
                        <div className="my-menu-content">
                            <div>마일리지</div>
                            <div>제안현황</div>
                            <div>참여내역</div>
                            <div>북마크</div>
                        </div>
                        <div className="my-menu-content" style={{ boxShadow: "none", paddingBottom: 0 }}>
                            <div>설정</div>
                            <div>로그아웃</div>
                        </div>
                    </div>
                    <div>{content}</div>
                    {/* <PopUp /> */}
                </div>
            </div>
        </div >
    );
}

import { useState } from "react";
import Faq from "./Faq";

export default function FaqList() {
    const [activeId, setActiveId] = useState(null);

    const handleToggle = (id) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="nurisodam-list-container">
            <Faq id={1} active={activeId === 1} onClick={() => handleToggle(1)} question="누리담터는 어떤 곳 인가요?" anwer="시민들의 창의적인 제안을 다른 시민과 토론하고 공감하는 과정을 통해, 누리소담시의 정책을 개발하고 시민의 다양한 의견을 수렴하기 위한 모바일 플랫폼입니다." />
            <Faq id={2} active={activeId === 2} onClick={() => handleToggle(2)} question="누리담터는 어떻게 이용할 수 있나요?" anwer="누리소담시 대표 홈페이지에 이미 가입하신 분들은 같은 아이디로 바로 로그인할 수 있습니다." />
            <Faq id={3} active={activeId === 3} onClick={() => handleToggle(3)} question="시민제안은 어떤 절차로 처리되나요?" anwer="시민들의 창의적인 제안을 다른 시민과 토론하고 공감하는 과정을 통해, 누리소담시의 정책을 개발하고 시민의 다양한 의견을 수렴하기 위한 모바일 플랫폼입니다." />
            <Faq id={4} active={activeId === 4} onClick={() => handleToggle(4)} question="누리담터 마일리지는 무엇인가요?" anwer="새빛톡톡 회원으로 가입하고 활동하면 부여 기준에 따라 적립되는 활동 장려금입니다. 1만 점 이상 적립 시 누리소담페이로 전환이 가능합니다." />
            <Faq id={5} active={activeId === 5} onClick={() => handleToggle(5)} question="누리담터 마일리지는 어떻게 모으나요?" anwer={"○ 마일리지 적립기준\n" + "회원가입, 가입추천인 입력, 출석체크, 제안 글을 올리거나 댓글을 달면 마일리지가 적립됩니다.\n\n" + "○ 마일리지를 누리소담페이로 전환해드립니다.\n" + "- 신청대상 : 마일리지 1만점 이상 회원 (1만점 신청)\n" + "- 신청시기 : 매월\n" + "- 신청방법 : 마일리지 > 누리소담페이 전환 클릭\n" + "- 지급시기 : 신청일 익월 (※ 예산범위 내 지급)"} />
            <Faq id={6} active={activeId === 6} onClick={() => handleToggle(6)} question="누리담터 서비스는 어떤 도움을 줄 수 있나요?" anwer="시민들의 창의적인 제안을 다른 시민과 토론하고 공감하는 과정을 통해, 누리소담시의 정책을 개발하고 시민의 다양한 의견을 수렴하기 위한 모바일 플랫폼입니다." />
            <Faq id={7} active={activeId === 7} onClick={() => handleToggle(7)} question="누리소담돌봄서비스는 어떻게 제공되나요?" anwer="동 돌봄 플래너가 서비스 신청 가구의 현장확인을 통해 돌봄 관련 어려움을 직접 파악하고, 지정된 기관을 통해 서비스를 제공합니다." />
            <Faq id={8} active={activeId === 8} onClick={() => handleToggle(8)} question="누리소담돌봄서비스는 어떻게 이용할 수 있나요?" anwer="주소지 동 행정복지센터에 전화 또는 방문하거나, 새빛톡톡 모바일 앱을 통해 신청하면 동 돌봄 플래너에게 연결됩니다." />
        </div>
    );
}

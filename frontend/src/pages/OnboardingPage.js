import React from "react";
import Header from "../components/Header";
import onboardingLogo from "../assets/image/onboarding/onboardingLogo.svg";
import nuri from "../assets/image/onboarding/Nuri.svg";
import ChatLabel from "../components/onboarding/ChatLabel";
import TextButtonS from "../ui/button/TextButtonS";
import OnboardingLabel from "../components/onboarding/OnboardingLabel";
import ShareIcon from "../ui/icons/ShareIcon";
import CoinIcon from "../ui/icons/CoinIcon";
import BellIcon from "../ui/icons/BellIcon";
import DownIcon from "../ui/icons/DownIcon";
import TextIcon from "../ui/icons/TextIcon";
import Choice from "../components/onboarding/Choice";

export default function OnboardingPage() {
    return (
        <div className="onboarding-container">
            <Header />
            <div className="onboarding-wrapper">
                <img src={onboardingLogo} alt="" />
                <div className="onboarding-content" style={{ gap: "3rem" }}>
                    <span>기존 시민 소통 플랫폼의 문제점</span>
                    <ChatLabel content="적응이 어려운 디지털 UI" type="white-l" />
                    <ChatLabel content="시민 참여 플랫폼의 낮은 인지도" type="orange-l" />
                    <ChatLabel content="번거롭고 어려운 참여과정" type="white" />
                    <ChatLabel content="불투명한 프로세스와 돌아오지 않는 피드백" type="orange" />
                </div>
                <div className="onboarding-content" style={{ gap: "1.5rem" }}>
                    <span>누리담터만의 방법으로 문제 해결!</span>
                    <OnboardingLabel content="제안, 설문하기 바로가기 버튼">
                        <ShareIcon size={44} type="hover" />
                    </OnboardingLabel>
                    <OnboardingLabel content="레벨별 뱃지 및 리워드 차등 지급">
                        <CoinIcon size={44} type="hover" />
                    </OnboardingLabel>
                    <OnboardingLabel content="정책 반영 흐름을 단계적으로 시각화">
                        <BellIcon size={44} type="hover" />
                    </OnboardingLabel>
                    <OnboardingLabel content="채택된 제안, 종료된 설문의 결과는 게시판 공개">
                        <DownIcon size={44} type="hover" />
                    </OnboardingLabel>
                    <OnboardingLabel content="큰 글씨, 큰 버튼 등의 접근성 모드 제공">
                        <TextIcon size={44} type="hover" />
                    </OnboardingLabel>
                </div>
                <img src={nuri} alt="" />
                <Choice userId={sessionStorage.getItem("user_id")} />
                <div className="onboarding-content" style={{ gap: "5rem", flexDirection: "row" }}>
                    <TextButtonS content="누리담터 둘러보기" onClick={() => window.location.href = "/nurisodam"} />
                    <TextButtonS content="제안 시작하기" type="action" onClick={() => window.location.href = "/writeproposal"} />
                </div>
            </div>
        </div>
    );
}

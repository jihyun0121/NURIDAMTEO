import React from "react";
import Header from "../components/Header";
import onboardingLogo from "../assets/image/onboarding/onboardingLogo.svg";
import nuri from "../assets/image/onboarding/Nuri.svg";
import ChatLabel from "../components/onboarding/ChatLabel";
import TextButtonS from "../ui/button/TextButtonS";

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
                    <></>
                    <></>
                    <></>
                    <></>
                    <></>
                </div>
                <img src={nuri} alt="" />
                <></>
                <div className="onboarding-content" style={{ gap: "5rem", flexDirection: "row" }}>
                    <TextButtonS content="누리담터 둘러보기" />
                    <TextButtonS content="제안 시작하기" type="action" />
                </div>
            </div>
        </div>
    );
}

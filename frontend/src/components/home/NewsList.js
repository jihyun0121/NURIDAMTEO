import ArrowIcon from "../../ui/icons/ArrowIcon";

export default function NewsList() {
    return (
        <>
            <div className="news-list-container">
                <div className="news-list-title">
                    <div className="news-list-label">오늘의 누리소담 소식</div>
                    <div className="news-list-btn">
                        모든 알림
                        <ArrowIcon direction={"right"} size={44} />
                    </div>
                </div>
                <div className="news-lists">2025 여성폭력 추방주간 홍보 안내</div>
                <div className="news-lists">누리소담비행장 블랙이글스 훈련 일정 안내</div>
                <div className="news-lists">2026년 누리소담시 생활이 더 편해지는 시민 혜택 안내</div>
                <div className="news-lists">인플루엔자 등 호흠기감염병 예방 수칙</div>
                <div className="news-lists">인플루엔자 등 호흠기감염병 예방 수칙</div>
            </div>
        </>
    );
}

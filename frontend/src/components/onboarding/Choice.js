import { useState } from "react";
import { InterestAPI } from "../../api/api";
import { colors } from "../../assets/style/tokens/colors";
import TextButtonS from "../../ui/button/TextButtonS";

export default function Choice({ userId }) {
    const [selectedIds, setSelectedIds] = useState([]);
    const [error, setError] = useState("");

    const toggleCategory = (id) => {
        setError("");

        setSelectedIds((prev) => {
            if (prev.includes(id)) return prev.filter((v) => v !== id);

            if (prev.length >= 3) {
                setError("관심 주제는 최대 3개까지 선택 가능합니다");
                return prev;
            }

            return [...prev, id];
        });
    };

    const isSelected = (id) => selectedIds.includes(id);
    const isDisabled = selectedIds.length === 0;

    const handleSubmit = async () => {
        if (isDisabled) return;
        console.log(selectedIds);

        try {
            await InterestAPI.selectInterests(userId, selectedIds);
            console.log("관심 주제 저장 성공");
        } catch (e) {
            setError(e?.response?.data?.error || "관심 주제 저장 실패");
        }
    };

    const buttonStyle = (id) => ({
        border: `4px solid ${isSelected(id) ? colors.orange.normal.base : colors.gray.light.active}`,
        color: isSelected(id) ? colors.orange.normal.base : "#595959",
    });

    return (
        <div className="choice-container">
            <span>관심 주제 선택 (최소 1개 ~ 최대 3개)</span>

            <div className="choice-buttons">
                <button className="choice-button" style={buttonStyle(1)} onClick={() => toggleCategory(1)}>
                    복지·교육
                </button>
                <button className="choice-button" style={buttonStyle(2)} onClick={() => toggleCategory(2)}>
                    교통·환경
                </button>
                <button className="choice-button" style={buttonStyle(3)} onClick={() => toggleCategory(3)}>
                    행정·민원
                </button>
            </div>

            <div className="choice-buttons">
                <button className="choice-button" style={buttonStyle(4)} onClick={() => toggleCategory(4)}>
                    안전·재난
                </button>
                <button className="choice-button" style={buttonStyle(5)} onClick={() => toggleCategory(5)}>
                    경제·상권
                </button>
                <button className="choice-button" style={buttonStyle(6)} onClick={() => toggleCategory(6)}>
                    문화·관광
                </button>
                <button className="choice-button" style={buttonStyle(7)} onClick={() => toggleCategory(7)}>
                    청년·일자리
                </button>
            </div>

            {error && <div className="signup-warning">{error}</div>}

            <TextButtonS
                content="선택 완료"
                type={isDisabled ? "default" : "hover"}
                readOnly={isDisabled}
                onClick={handleSubmit}
            />
        </div>
    );
}

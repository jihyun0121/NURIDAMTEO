import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.svg";
import TextButtonS from "../ui/button/TextButtonS";
import FormDropdown from "../ui/input/FormDropdown";

export default function WriteProposalPage() {
    const optionData = [
        { key: 1, value: "복지·교육" },
        { key: 2, value: "교통·환경" },
        { key: 3, value: "행정·민원" },
        { key: 4, value: "안전·재난" },
        { key: 5, value: "경제·상권" },
        { key: 6, value: "문화·관광" },
        { key: 7, value: "청년·일자리" },
    ];

    return (
        <div className="writeproposal-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
            <div className="writeproposal-wrapper">
                <FormDropdown />
            </div>
        </div>
    );
}

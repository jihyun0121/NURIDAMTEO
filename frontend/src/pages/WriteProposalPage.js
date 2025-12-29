import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.svg";
import DropdownBox from "../ui/input/FormDropdown";
import TextButtonS from "../ui/button/TextButtonS";

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
                <DropdownBox optionData={optionData} value="주제선택" />
                <div className="writeproposal-contant">
                    <input className="title-input" style={{ width: "95rem" }} placeholder="제목을 입력해주세요." />
                    <textarea className="content-input" style={{ width: "95rem", height: "37.5rem" }} placeholder="내용을 입력해주세요." />
                </div>
                <div className="writeproposal-button">
                    <TextButtonS content="제안하기" onClick={() => (window.location.href = "/proposal")} />
                </div>
            </div>
        </div>
    );
}

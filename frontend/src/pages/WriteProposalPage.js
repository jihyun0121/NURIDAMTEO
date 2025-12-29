import { useState } from "react";
import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.svg";
import DropdownBox from "../ui/input/FormDropdown";
import TextButtonS from "../ui/button/TextButtonS";
import { ProposalAPI } from "../api/api";

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

    const loginUser = sessionStorage.getItem("user_id");

    const [category, setCategory] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        if (!loginUser) {
            alert("로그인이 필요합니다.");
            window.location.href = "/login";
            return;
        }

        if (!category) {
            alert("카테고리를 선택해주세요.");
            return;
        }

        if (!title.trim()) {
            alert("제목을 입력해주세요.");
            return;
        }

        if (!content.trim()) {
            alert("내용을 입력해주세요.");
            return;
        }

        try {
            const dto = {
                category_id: category,
                title: title,
                content: content,
                start_at: new Date().toISOString().slice(0, 10),
                end_at: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
            };

            await ProposalAPI.createProposal(loginUser, dto);

            alert("제안이 등록되었습니다!");
            window.location.href = "/proposal";
        } catch (e) {
            console.log("제안 등록 실패", e);
            alert("제안 등록 실패");
        }
    };

    return (
        <div className="writeproposal-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />

            <div className="writeproposal-wrapper">
                <DropdownBox
                    optionData={optionData}
                    value={category ? optionData.find((o) => o.key === category)?.value : "주제선택"}
                    onChange={(value) => {
                        const selected = optionData.find((o) => o.value === value);
                        setCategory(selected?.key || null);
                    }}
                />

                <div className="writeproposal-contant">
                    <input className="title-input" style={{ width: "95rem" }} placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea className="content-input" style={{ width: "95rem", height: "37.5rem" }} placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
                </div>

                <div className="writeproposal-button">
                    <TextButtonS content="제안하기" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import banner from "../assets/image/participate/participatebanner.svg";
import SearchBar from "../ui/input/SearchBar";
import FormDropdown from "../ui/input/FormDropdown";
import ParticipateContent from "../components/participate/ParticipateContent";
import NoticeLabel from "../ui/NoticeLabel";
import NoticeIcon from "../ui/icons/NoticeIcon";

export default function ParticipatePage() {
    const optionData = [
        { key: 1, value: "설문조사" },
        { key: 2, value: "패널조사" },
    ];

    const [searchParams, setSearchParams] = useSearchParams();

    const defaultCategory = searchParams.get("category") || "설문조사";
    const [selected, setSelected] = useState(defaultCategory);

    useEffect(() => {
        setSelected(defaultCategory);
    }, [defaultCategory]);

    const handleChange = (value) => {
        setSelected(value);
        setSearchParams({ category: value });
    };

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    let content;

    if (selected === "설문조사") {
        content = (
            <div className="participate-notice">
                <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="설문 등록" subText="공무원" />
                <div className="notice-line" />
                <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="설문 선택 및 응답" />
                <div className="notice-line" />
                <NoticeLabel children={<NoticeIcon type="list" size="44" />} text="시민의견 정책반영" />
            </div>
        );
    } else if (selected === "패널조사") {
        content = (
            <>
                <div className="participate-notice-wrapper">
                    <div className="participate-notice-texts">
                        <p>· 누리소담시의 정책과 행정운영에 대해 제안해주세요.</p>
                        <p>· 좋은 정책으로 이어질 수 있도록 댓글로 토론하고 공감해주세요.</p>
                        <p>· 30일 내 100개의 공감을 얻은 제안은 관련부서의 검토를 통해 정책에 반영합니다.</p>
                    </div>
                </div>
                <div className="participate-notice">
                    <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="패널조사 등록" subText="공무원" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="패널선정조사 참여" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="list" size="44" />} text="패널조사 참여" subText="패널 선정 시 진행" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="news" size="44" />} text="시민의견 정책반영" />
                </div>
            </>
        );
    }

    return (
        <div className="participate-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
            <div className="participate-wrapper">
                {content}
                <div style={{ display: "flex", width: "95rem", alignItems: "center", gap: "2rem" }}>
                    <FormDropdown size="short" optionData={optionData} value={selected} onChange={handleChange} />
                    <SearchBar type="short" onCategoryChange={handleCategoryChange} />
                </div>
                <ParticipateContent category={selected} filterCategory={selectedCategory} />
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import banner from "../assets/image/nurisodam/banner.svg";
import FormDropdown from "../ui/input/FormDropdown";
import NurisodamContent from "../components/nurisodam/NurisodamContent";

export default function NurisodamPage() {
    const optionData = [
        { key: 1, value: "공지사항" },
        { key: 2, value: "동네소식" },
        { key: 3, value: "FAQ" },
        { key: 4, value: "결과 게시판" },
    ];

    const [searchParams, setSearchParams] = useSearchParams();

    const defaultCategory = searchParams.get("category") || "공지사항";
    const [selected, setSelected] = useState(defaultCategory);

    useEffect(() => {
        setSelected(defaultCategory);
    }, [defaultCategory]);

    const handleChange = (value) => {
        setSelected(value);
        setSearchParams({ category: value });
    };

    return (
        <div className="nurisodam-container">
            <Header />

            <div className="nurisodam-content">
                <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
                <div style={{ display: "flex", width: "95rem", alignItems: "center", gap: "2rem" }}>
                    <FormDropdown size="short" optionData={optionData} value={selected} onChange={handleChange} />
                </div>

                <NurisodamContent category={selected} />
            </div>
        </div>
    );
}

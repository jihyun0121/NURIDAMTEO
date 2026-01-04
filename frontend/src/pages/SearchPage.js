import React from "react";
import Header from "../components/Header";

export default function SearchPage({ keyword }) {
    const token = sessionStorage.getItem("token");

    return (
        <div className="search-page-container">
            <Header />
            <div className="search-page-content">
                <div className="search-page-title">검색결과</div>
                <div className="search-page-none">'{keyword}'에 대한 검색 결과가 없습니다.</div>
                <div className="search-result">
                    <div className="search-sub-title">
                        <div className="search-sub-text">제안</div>
                        <div className="nav-text">더보기</div>
                    </div>
                </div>
                <div className="search-result">
                    <div className="search-sub-title">
                        <div className="search-sub-text">설문</div>
                        <div className="nav-text">더보기</div>
                    </div>
                </div>
                <div className="search-result">
                    <div className="search-sub-title">
                        <div className="search-sub-text">공지 사항</div>
                        <div className="nav-text">더보기</div>
                    </div>
                </div>
                <div className="search-result">
                    <div className="search-sub-title">
                        <div className="search-sub-text">누리소담</div>
                        <div className="nav-text">더보기</div>
                    </div>
                </div>
                <div className="search-result">
                    <div className="search-sub-title">
                        <div className="search-sub-text">결과 게시판</div>
                        <div className="nav-text">더보기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

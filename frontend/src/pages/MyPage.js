import React from "react";
import Header from "../components/Header";
import banner from "../assets/image/home/banner.svg";
import ShortcutButton from "../components/home/ShortcutButton";
import NewsList from "../components/home/NewsList";
import ProfileCard from "../components/home/ProfileCard";
import ProposalList from "../components/home/Proposalist";

export default function MyPage() {
    const token = sessionStorage.getItem("token");
    const login = !!token;

    const userId = sessionStorage.getItem("user_id");

    return (
        <div className="home-container">
            <Header />
        </div>
    );
}

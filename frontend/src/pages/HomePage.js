import React from "react";
import Header from "../components/Header";
import banner from "../assets/image/home/banner.svg";
import ShortcutButton from "../components/home/ShortcutButton";
import NewsList from "../components/home/NewsList";
import ProfileCard from "../components/home/ProfileCard";
import ProposalList from "../components/home/Proposalist";

export default function HomePage() {
    const token = sessionStorage.getItem("token");
    const login = !!token;

    const userId = sessionStorage.getItem("user_id");

    return (
        <div className="home-container">
            <Header />
            <img src={banner} width="100%" alt="" />
            <div className="home-content">
                <ShortcutButton />
                <NewsList />
                <ProfileCard login={login} userId={userId} />
            </div>
            <ProposalList />
            <div className="home-footer"></div>
        </div>
    );
}

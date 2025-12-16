import React from "react";
import Header from "../components/Header";
import banner from "../assets/image/home/banner.png";
import ShortcutButton from "../components/home/ShortcutButton";
import NewsList from "../components/home/NewsList";
import ProfileCard from "../components/home/ProfileCard";

<img src={banner} width="100%" alt="" />;

export default function HomePage() {
    return (
        <>
            <div className="home-container">
                <Header />
                <img src={banner} width="100%" alt="" />
                <div className="home-content ">
                    <ShortcutButton />
                    <NewsList />
                    <ProfileCard />
                </div>
            </div>
        </>
    );
}

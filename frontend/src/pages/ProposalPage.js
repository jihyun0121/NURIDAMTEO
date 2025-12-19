import React from "react";
import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.png";
import SearchBar from "../ui/input/SearchBar";
import ProposalCard from "../components/home/ProposalCard";
import SquareArroIcon from "../ui/icons/SquareArrowIcon";
import SquareNumber from "../ui/icons/SquareNumber";
import NoticeLabel from "../ui/NoticeLabel";
import NoticeIcon from "../ui/icons/NoticeIcon";

export default function proposalPage() {
    return (
        <div className="proposal-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
            <div className="proposal-wrapper"></div>
        </div>
    );
}

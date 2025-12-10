import React from "react";
import Logo from "../ui/Logo";
import UserIcon from "../ui/icons/UserIcon";
import ArrowIcon from "../ui/icons/ArrowIcon";
import PlusIcon from "../ui/icons/PlusIcon";
import BellIcon from "../ui/icons/BellIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import ShareIcon from "../ui/icons/ShareIcon";
import EyeIcon from "../ui/icons/EyeIcon";
import HeartIcon from "../ui/icons/HeartIcon";
import ChatIcon from "../ui/icons/ChatIcon";
import BookmarkIcon from "../ui/icons/BookmarkIcon";
import MenuIcon from "../ui/icons/MenuIcon";
import CheckIcon from "../ui/icons/CheckIcon";
import VoteIcon from "../ui/icons/VoteIcon";
import CoinIcon from "../ui/icons/CoinIcon";
import SettingIcon from "../ui/icons/SettingIcon";
import HomeIcon from "../ui/icons/HomeIcon";
import SquareArrowIcon from "../ui/icons/SquareArrowIcon";
import SquareNumber from "../ui/icons/SquareNumber";
import NuridamIcon from "../ui/icons/NuridamIcon";
import BadgeIcon from "../ui/icons/BadgeIcon";
import LabelButton from "../ui/button/LabelButton";
import AuthButton from "../ui/button/AuthButton";
import ProfileButton from "../ui/button/ProfileButton";
import TextButtonS from "../ui/button/TextButtonS";
import TextButtonL from "../ui/button/TextButtonL";
import Profile from "../ui/Profile";
import LevelLabel from "../ui/LevelLabel";
import NoticeLabel from "../ui/NoticeLabel";
import NoticeIcon from "../ui/icons/NoticeIcon";

export default function HomePage() {
    return (
        <>
            <div className="bg">
                <div className="icon">
                    <div className="icons">
                        <Logo size="l" />
                        <Logo size="m" />
                        <Logo size="s" />
                    </div>

                    <div className="icon">
                        <div className="icons">
                            <UserIcon size="44" />
                            <UserIcon type="fill" size="44" />
                            <UserIcon type="hover" size="44" />
                            <UserIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ArrowIcon direction="left" size="44" />
                            <ArrowIcon direction="left" type="fill" size="44" />
                            <ArrowIcon direction="left" type="hover" size="44" />
                            <ArrowIcon direction="left" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ArrowIcon direction="right" size="44" />
                            <ArrowIcon direction="right" type="fill" size="44" />
                            <ArrowIcon direction="right" type="hover" size="44" />
                            <ArrowIcon direction="right" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ArrowIcon direction="down" size="44" />
                            <ArrowIcon direction="down" type="fill" size="44" />
                            <ArrowIcon direction="down" type="hover" size="44" />
                            <ArrowIcon direction="down" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ArrowIcon direction="up" size="44" />
                            <ArrowIcon direction="up" type="fill" size="44" />
                            <ArrowIcon direction="up" type="hover" size="44" />
                            <ArrowIcon direction="up" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <PlusIcon size="44" />
                            <PlusIcon type="fill" size="44" />
                            <PlusIcon type="hover" size="44" />
                            <PlusIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <BellIcon size="44" />
                            <BellIcon type="fill" size="44" />
                            <BellIcon type="hover" size="44" />
                            <BellIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <SearchIcon size="44" />
                            <SearchIcon type="fill" size="44" />
                            <SearchIcon type="hover" size="44" />
                            <SearchIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ShareIcon size="44" />
                            <ShareIcon type="fill" size="44" />
                            <ShareIcon type="hover" size="44" />
                            <ShareIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <EyeIcon size="44" />
                            <EyeIcon type="fill" size="44" />
                            <EyeIcon type="hover" size="44" />
                            <EyeIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <HeartIcon variant="line" size="44" />
                            <HeartIcon variant="line" type="fill" size="44" />
                            <HeartIcon variant="line" type="hover" size="44" />
                            <HeartIcon variant="line" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <HeartIcon variant="fill" size="44" />
                            <HeartIcon variant="fill" type="fill" size="44" />
                            <HeartIcon variant="fill" type="hover" size="44" />
                            <HeartIcon variant="fill" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ChatIcon variant="line" size="44" />
                            <ChatIcon variant="line" type="fill" size="44" />
                            <ChatIcon variant="line" type="hover" size="44" />
                            <ChatIcon variant="line" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <ChatIcon variant="fill" size="44" />
                            <ChatIcon variant="fill" type="fill" size="44" />
                            <ChatIcon variant="fill" type="hover" size="44" />
                            <ChatIcon variant="fill" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <BookmarkIcon variant="line" size="44" />
                            <BookmarkIcon variant="line" type="fill" size="44" />
                            <BookmarkIcon variant="line" type="hover" size="44" />
                            <BookmarkIcon variant="line" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <BookmarkIcon variant="fill" size="44" />
                            <BookmarkIcon variant="fill" type="fill" size="44" />
                            <BookmarkIcon variant="fill" type="hover" size="44" />
                            <BookmarkIcon variant="fill" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <MenuIcon size="44" />
                            <MenuIcon type="fill" size="44" />
                            <MenuIcon type="hover" size="44" />
                            <MenuIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <CheckIcon size="44" />
                            <CheckIcon type="fill" size="44" />
                            <CheckIcon type="hover" size="44" />
                            <CheckIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <VoteIcon size="44" />
                            <VoteIcon type="fill" size="44" />
                            <VoteIcon type="hover" size="44" />
                            <VoteIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <CoinIcon size="44" />
                            <CoinIcon type="fill" size="44" />
                            <CoinIcon type="hover" size="44" />
                            <CoinIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <SettingIcon size="44" />
                            <SettingIcon type="fill" size="44" />
                            <SettingIcon type="hover" size="44" />
                            <SettingIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <HomeIcon size="44" />
                            <HomeIcon type="fill" size="44" />
                            <HomeIcon type="hover" size="44" />
                            <HomeIcon type="active" size="44" />
                        </div>
                        <div className="icons">
                            <HomeIcon size="44" />
                            <HomeIcon type="fill" size="44" />
                            <HomeIcon type="hover" size="44" />
                            <HomeIcon type="active" size="44" />
                        </div>

                        <div className="icons">
                            <SquareNumber value="1" size="44" />
                            <SquareNumber value="1" type="fill" size="44" />
                            <SquareNumber value="1" type="hover" size="44" />
                            <SquareNumber value="1" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <SquareArrowIcon direction="left" size="44" />
                            <SquareArrowIcon direction="left" type="fill" size="44" />
                            <SquareArrowIcon direction="left" type="hover" size="44" />
                            <SquareArrowIcon direction="left" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <SquareArrowIcon direction="right" size="44" />
                            <SquareArrowIcon direction="right" type="fill" size="44" />
                            <SquareArrowIcon direction="right" type="hover" size="44" />
                            <SquareArrowIcon direction="right" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <SquareArrowIcon direction="left" variant="double" size="44" />
                            <SquareArrowIcon direction="left" variant="double" type="fill" size="44" />
                            <SquareArrowIcon direction="left" variant="double" type="hover" size="44" />
                            <SquareArrowIcon direction="left" variant="double" type="active" size="44" />
                        </div>
                        <div className="icons">
                            <SquareArrowIcon direction="right" variant="double" size="44" />
                            <SquareArrowIcon direction="right" variant="double" type="fill" size="44" />
                            <SquareArrowIcon direction="right" variant="double" type="hover" size="44" />
                            <SquareArrowIcon direction="right" variant="double" type="active" size="44" />
                        </div>

                        <div className="icons">
                            <NoticeIcon type="list" size={44} />
                            <NoticeIcon type="news" size={44} />
                            <NoticeIcon type="pen" size={44} />
                            <NoticeIcon type="heart" size={44} />
                        </div>

                        <div className="icons">
                            <NuridamIcon type="nuri" size="25" />
                            <NuridamIcon type="sodam" size="25" />
                            <NuridamIcon type="guruem" size="25" />
                            <NuridamIcon size="25" />
                        </div>

                        <div className="icons">
                            <BadgeIcon type="nuri" size="25" />
                            <BadgeIcon type="sodam" size="25" />
                            <BadgeIcon type="guruem" size="25" />
                        </div>

                        <div className="icons">
                            <LabelButton content="Button" type="gray" />
                            <LabelButton content="Button" type="red" />
                            <LabelButton content="Button" type="green" />
                            <LabelButton content="Button" type="primary" />
                            <LabelButton content="Button" type="fill" />
                        </div>

                        <div className="icons">
                            <AuthButton content="Text" type="nuri" />
                        </div>

                        <div className="icons">
                            <ProfileButton content="Text">
                                <CoinIcon size={44} color="inherit" />
                            </ProfileButton>
                        </div>

                        <div className="icons">
                            <TextButtonS content="Text">
                                <CheckIcon size={44} color="inherit" />
                            </TextButtonS>
                        </div>

                        <div className="icons">
                            <NoticeLabel text="설문 등록" subText="공무원">
                                <NoticeIcon size={44} color="inherit" />
                            </NoticeLabel>
                        </div>
                        <div className="icons">
                            <TextButtonL content="Text" />
                        </div>

                        <div className="icons">
                            <Profile />
                            <LevelLabel level="1" type="guruem" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

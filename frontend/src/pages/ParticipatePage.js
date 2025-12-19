import { useEffect, useState } from "react";
import { ProposalAPI } from "../api/api";
import Header from "../components/Header";
// import banner from "../assets/image/participate/participatebanner.svg";
import SearchBar from "../ui/input/SearchBar";
import ProposalCard from "../components/home/ProposalCard";
import NoticeLabel from "../ui/NoticeLabel";
import NoticeIcon from "../ui/icons/NoticeIcon";
import TextButtonS from "../ui/button/TextButtonS";

export default function ParticipatePage() {
    const [participate, setProposal] = useState([]);

    useEffect(() => {
        async function loadProposal() {
            try {
                const res = await ProposalAPI.getProposals(0);

                const first = res.data?.[0];

                if (!first) return;

                setProposal({
                    ...first,
                    isBest: true,
                });
            } catch (err) {
                console.log("제안 로딩 실패", err);
            }
        }

        loadProposal();
    }, []);

    return (
        <div className="participate-container">
            <Header />
            {/* <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} /> */}
            <div className="participate-wrapper">
                <div className="participate-notice">
                    <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="시민의견 제시" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="댓글토론 및 공감" subText="1개월" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="list" size="44" />} text="심사 후 결과 회신" subText="1개월" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="news" size="44" />} text="채택 시 정책 반영" />
                </div>
                <div className="participate-notice-wrapper">
                    <div className="participate-notice-texts">
                        <p>· 누리소담시의 정책과 행정운영에 대해 제안해주세요.</p>
                        <p>· 좋은 정책으로 이어질 수 있도록 댓글로 토론하고 공감해주세요.</p>
                        <p>· 30일 내 100개의 공감을 얻은 제안은 관련부서의 검토를 통해 정책에 반영합니다.</p>
                    </div>
                    <TextButtonS content="제안 작성하기" type="yellow" style={{ boxShadow: "none" }} />
                </div>
                <div className="participate-searchbar">
                    <SearchBar type="long" />
                </div>
                <div className="participate-list">
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                    <ProposalCard participate={participate} />
                </div>
            </div>
        </div>
    );
}

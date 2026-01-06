import { useEffect, useState } from "react";
import { ProposalAPI, SearchAPI } from "../api/api";
import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.svg";
import SearchBar from "../ui/input/SearchBar";
import ProposalCard from "../components/proposal/ProposalCard";
import NoticeLabel from "../ui/NoticeLabel";
import NoticeIcon from "../ui/icons/NoticeIcon";
import TextButtonS from "../ui/button/TextButtonS";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 8;

export default function ProposalPage() {
    const [proposal, setProposal] = useState([]);
    const [allProposal, setAllProposal] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [keyword, setKeyword] = useState("");

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [loading, setLoading] = useState(false);

    const userId = Number(sessionStorage.getItem("user_id"));

    useEffect(() => {
        async function loadProposal() {
            setLoading(true);
            try {
                const res = await ProposalAPI.getProposals();
                setProposal(res.data || []);
                setAllProposal(res.data || []);
            } catch (err) {
                console.log("제안 로딩 실패", err);
            } finally {
                setLoading(false);
            }
        }

        loadProposal();
    }, []);

    const handleSearch = async (text) => {
        const nextKeyword = (text ?? keyword).trim();
        setCurrentPage(1);
        setSelectedCategory(null);
        setLoading(true);
        try {
            if (!nextKeyword) {
                setProposal(allProposal);
                setKeyword("");
                return;
            }

            const res = await SearchAPI.searchProposals(nextKeyword);
            setProposal(res.data || []);
        } catch (e) {
            console.log("제안 검색 실패", e);
            setProposal([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = async (option) => {
        setCurrentPage(1);

        setKeyword("");

        if (!option) {
            setSelectedCategory(null);
            setProposal(allProposal);
            return;
        }

        setSelectedCategory(option);

        setLoading(true);
        try {
            const res = await SearchAPI.searchCategoryProposals(option.key);
            setProposal(res.data || []);
        } catch (e) {
            console.log("카테고리 검색 실패", e);
            setProposal([]);
        } finally {
            setLoading(false);
        }
    };

    const totalPages = Math.max(1, Math.ceil(proposal.length / PAGE_SIZE));
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentProposal = proposal.slice(startIndex, startIndex + PAGE_SIZE);

    return (
        <div className="proposal-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
            <div className="proposal-wrapper">
                <div className="proposal-notice">
                    <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="시민의견 제시" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="pen" size="44" />} text="댓글토론 및 공감" subText="1개월" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="list" size="44" />} text="심사 후 결과 회신" subText="1개월" />
                    <div className="notice-line" />
                    <NoticeLabel children={<NoticeIcon type="news" size="44" />} text="채택 시 정책 반영" />
                </div>

                <div className="proposal-notice-wrapper">
                    <div className="proposal-notice-texts">
                        <p>· 누리소담시의 정책과 행정운영에 대해 제안해주세요.</p>
                        <p>· 좋은 정책으로 이어질 수 있도록 댓글로 토론하고 공감해주세요.</p>
                        <p>· 30일 내 100개의 공감을 얻은 제안은 관련부서의 검토를 통해 정책에 반영합니다.</p>
                    </div>
                    <TextButtonS
                        content="제안 작성하기"
                        type="yellow"
                        style={{ boxShadow: "none" }}
                        onClick={() => {
                            if (!userId?.user_id) return alert("로그인이 필요합니다.");
                            window.location.href = "/writeproposal";
                        }}
                    />
                </div>

                <div className="proposal-searchbar">
                    <SearchBar type="long" value={keyword} onChange={setKeyword} onSearch={handleSearch} onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
                </div>

                {loading ? (
                    <div className="search-page-none">로딩중...</div>
                ) : proposal.length === 0 ? (
                    <div className="search-page-none">검색 결과가 없습니다.</div>
                ) : (
                    <>
                        <div className="proposal-list">
                            {currentProposal.map((p) => (
                                <div key={p.proposal_id}>
                                    <ProposalCard proposal={p} />
                                </div>
                            ))}
                        </div>

                        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
                    </>
                )}
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import { ProposalAPI } from "../../api/api";
import NuridamIcon from "../../ui/icons/NuridamIcon";
import { colors } from "../../assets/style/tokens/colors";
import ProposalCard from "../proposal/ProposalCard";

export default function ProposalList() {
    const [proposal, setProposal] = useState([]);

    useEffect(() => {
        async function loadProposal() {
            try {
                const res = await ProposalAPI.getProposals(0);

                const filtered = res.data
                    .filter((item) => item.status === "OPEN")
                    .filter((item) => new Date(item.end_at) > new Date())
                    .sort((a, b) => b.like_count - a.like_count)
                    .slice(0, 4)
                    .map((item, index) => ({
                        ...item,
                        isBest: index === 0,
                    }));

                setProposal(filtered);
            } catch (err) {
                console.log("제안 로딩 실패", err);
            }
        }

        loadProposal();
    }, []);

    return (
        <div className="proposal-list-container">
            <div className="proposal-list-title">
                <NuridamIcon type="sodam" size={64} />
                <div>
                    <span style={{ color: colors.orange.normal.hover }}>토론에 참여</span>하고 누리소담시에게<span style={{ color: colors.orange.normal.hover }}>의견을 들려주세요!</span>
                </div>
            </div>

            <div className="proposal-list-cards">
                {proposal.map((proposal, index) => (
                    <div key={index} className="proposal-list-card">
                        <ProposalCard type="light" proposal={proposal} />
                    </div>
                ))}
            </div>
        </div>
    );
}

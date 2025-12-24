import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.svg";

export default function WriteProposalPage() {
    return (
        <div className="proposal-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
        </div>
    );
}

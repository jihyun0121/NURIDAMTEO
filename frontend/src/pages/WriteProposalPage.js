import Header from "../components/Header";
import banner from "../assets/image/proposal/proposalbanner.svg";
import ProfileCard from "../components/home/ProfileCard";

export default function WriteProposalPage() {
    return (
        <div className="writeproposal-container">
            <Header />
            <img src={banner} width="100%" alt="" style={{ marginTop: "6.25rem" }} />
            <div className="writeproposal-wrapper">
                <DropdownBox />
            </div>
        </div>
    );
}

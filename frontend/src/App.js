import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ParticipatePage from "./pages/ParticipatePage";
import ProposalPage from "./pages/ProposalPage";
import NurisodamPage from "./pages/NurisodamPage";
import IconPage from "./icons/IconPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import OnboardingPage from "./pages/OnboardingPage";
import ContentPage from "./pages/ContentPage";
import WriteProposalPage from "./pages/WriteProposalPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/participate" element={<ParticipatePage />} />
                <Route path="/participate/:surveyId" element={<ContentPage />} />
                <Route path="/proposal" element={<ProposalPage />} />
                <Route path="/proposal/write" element={<WriteProposalPage />} />
                <Route path="/proposal/:proposalId" element={<ContentPage />} />
                <Route path="/nurisodam" element={<NurisodamPage />} />
                <Route path="/nurisodam/news/:noticeId" element={<ContentPage />} />
                <Route path="/nurisodam/notice/:noticeId" element={<ContentPage />} />
                <Route path="/nurisodam/result/:resultId" element={<ContentPage />} />
                <Route path="/icons" element={<IconPage />} />
            </Routes>
        </Router>
    );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ParticipatePage from "./pages/ParticipatePage";
import ProposalPage from "./pages/ProposalPage";
import NurisodamPage from "./pages/NurisodamPage";
import IconPage from "./icons/IconPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NurisodamDetail from "./components/nurisodam/NurisodamDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/participate" element={<ParticipatePage />} />
                <Route path="/proposal" element={<ProposalPage />} />
                <Route path="/nurisodam" element={<NurisodamPage />} />
                <Route path="/nurisodam/news/:noticeId" element={<NurisodamDetail />} />
                <Route path="/nurisodam/notice/:noticeId" element={<NurisodamDetail />} />
                <Route path="/nurisodam/faq" element={<NurisodamDetail />} />
                <Route path="/nurisodam/result/:resultId" element={<NurisodamDetail />} />
                <Route path="/icons" element={<IconPage />} />
            </Routes>
        </Router>
    );
}

export default App;

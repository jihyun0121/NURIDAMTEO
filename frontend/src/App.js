import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ParticipatePage from "./pages/ParticipatePage";
import ProposalPage from "./pages/ProposalPage";
import NurisodamPage from "./pages/NurisodamPage";
import IconPage from "./icons/IconPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/participate" element={<ParticipatePage />} />
                <Route path="/proposal" element={<ProposalPage />} />
                <Route path="/nurisodam" element={<NurisodamPage />} />
                <Route path="/icons" element={<IconPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;

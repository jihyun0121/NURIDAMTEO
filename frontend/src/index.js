import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "./App.css";
import "./assets/style/style.css";
import "./assets/style/font.css";
import "./assets/style/button.css";
import "./assets/style/label.css";
import "./assets/style/profile.css";
import "./assets/style/input.css";
import "./assets/style/header.css";
import "./assets/style/tokens/colors.css";
import "./assets/style/tokens/typography.css";
import "./assets/style/home/home.css";
import "./assets/style/home/news.css";
import "./assets/style/home/proposalList.css";
import "./assets/style/auth/Login.css";
import "./assets/style/auth/Signup.css";
import "./assets/style/my/mileage.css";
import "./assets/style/proposal/proposal.css";
import "./assets/style/nurisodam/nurisodam.css";
import "./assets/style/nurisodam/list.css";
import "./icons/iconPage.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

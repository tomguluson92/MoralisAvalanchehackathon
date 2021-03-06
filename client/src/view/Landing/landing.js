import React from "react";
import "./landing.css";
import Header from "./components/Header/index.js";
import Main from "./components/Main/index.js";
import Background from "./components/Background/index.js";
import Footer from "./components/Footer/index.js";


function Landing() {
    return (
        <div className="landing-root">
            <Header />
            <Main />
            <Background />
            <Footer />
        </div>
    );
}

export default Landing;
import React from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import Header from "../../components/Header/Header";
import LeftSection from "../LeftSection/left-section";
import MainSection from "../MainSection/main-section";
import RightSection from "../RightSection/right-section";
import "./home-screen.scss";

const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="left-section">
          <LeftSection />
        </div>

        <div className="main-section">
          <MainSection />
        </div>

        <div className="right-section">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

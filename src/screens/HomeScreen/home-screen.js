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
      <div class="container">
        <div class="left-section">
          <LeftSection />
        </div>

        <div class="main-section">
          <MainSection />
        </div>

        <div class="right-section">
          <RightSection />
        </div>
      </div>
      <DarkMode/>
    </div>
  );
};

export default HomeScreen;

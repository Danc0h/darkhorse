import React, { useState } from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import "./Main.css";
import RunningTips from "./Running.jsx";
import Progress from "./Progress";
import About from "./About";
import Services from "./Services";

export default function Home() {
  const [activeTab, setActiveTab] = useState("runningTips");

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Scroll to the content section when a tab is clicked
    const section = document.getElementById(tab);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderContent = () => {
    if (activeTab === "runningTips") {
      return (
        <div id='runningTips' className='tab-content'>
          <h2>Running Tips</h2>
          <RunningTips />
        </div>
      );
    } else if (activeTab === "progress") {
      return (
        <div id='progress' className='tab-content'>
          <h2>Progress</h2>
          <Progress />
        </div>
      );
    }
  };

  return (
    <>
      <HeroSection />
      <div className='app'>
        <div className='bottom-nav'>
          <button
            className={activeTab === "runningTips" ? "active" : ""}
            onClick={() => handleTabChange("runningTips")}
          >
            Running Tips
          </button>
          <div className='divider'></div>
          <button
            className={activeTab === "progress" ? "active" : ""}
            onClick={() => handleTabChange("progress")}
          >
            Progress
          </button>
        </div>
        <div className='content'>{renderContent()}</div>
      </div>
      <About />
      <Services />
      <Footer />
    </>
  );
}

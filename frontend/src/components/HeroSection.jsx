import React from "react";
import "../App.css";
import "./HeroSection.css";
import { FaRocket } from "react-icons/fa";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>
        GRAND CLUB TIPS
        <FaRocket />
      </h1>
      <h2 className='hero-h2'>
        At GrandClub We Make BANK with daily 2+ daily Odds
      </h2>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log("hey")}
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

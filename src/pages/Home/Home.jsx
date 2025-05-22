import React from "react";
import styles from "./Home.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSec from "../../components/AboutSec/AboutSec"; // Assuming you have an AboutSec component

function Home() {
  return (
    // The div with background color is removed as HeroSection now handles its own background
    <>
      <div>
        <HeroSection />
        <AboutSec />
      </div>
    </>
  );
}

export default Home;

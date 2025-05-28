import React from "react";
import styles from "./Home.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSec from "../../components/AboutSec/AboutSec";
import ProjectSec from "../../components/ProjectSec/ProjectSec";
import ContactSec from "../../components/ContactSec/ContactSec";

function Home() {
  return (
    <>
      <div>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSec />
        </section>
        <section id="projects">
          <ProjectSec />
        </section>
        <section id="contact">
          <ContactSec />
        </section>
      </div>
    </>
  );
}

export default Home;

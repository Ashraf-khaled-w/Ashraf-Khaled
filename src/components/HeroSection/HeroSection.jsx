import React from 'react'
import styles from './HeroSection.module.css'
import Button from '../ui/Button/Button';
import HeroImage from '../../assets/myImgs/1.jpg'; // Assuming you have an image in your assets folder


function HeroSection() {
    return (
      // Using a more semantic tag like <section> is often good for hero sections.
      // Added padding and flex layout for better content arrangement.
      <section
        id="heroSection"
        className={`text-white bg-[#222831] py-20 px-6 md:px-10 lg:px-12 flex flex-col items-center text-center`} // Added bg color here as Home.jsx was wrapping it
      >
        <div id="heroText" className="max-w-3xl">
          <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-[#94B49F]">Ashraf</span>{" "}
            <i class="fa-solid fa-hand fa-shake text-[#ffca28]"></i>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            I'm a passionate Front-End Developer specializing in creating modern and responsive
            web applications using HTML, CSS, JavaScript, Tailwind CSS, React, Bootstrap, and
            Git/GitHub.
          </p>
        </div>
        <div id="heroImage" className="my-8">
          <img
            src={HeroImage}
            alt="Ashraf Khaled - Front-End Developer"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover mx-auto shadow-lg border-4 border-gray-700 shadow-[#393E46] hover:shadow-xl transition-all duration-300 ease-in-out"
          />
          {/* You can adjust w-X h-X (width/height) and rounded-full/rounded-lg etc. as needed */}
        </div>
        <div id="heroButtons">
          <Button text={`Get Started`} />
          <Button text={`See my resume`} />
        </div>
      </section>
    );
}

export default HeroSection

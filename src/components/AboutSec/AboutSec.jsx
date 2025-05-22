import React from 'react'
// import styles from './AboutSec.module.css' // You can remove this if not using CSS Modules for this component

function AboutSec() {
    return (
      <section id="about" className="bg-[#222831] text-white py-16 px-6 md:px-10 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
          <div className="text-left md:text-center space-y-6 text-gray-300 text-lg">
            <p>
              My name is Ashraf Khaled, and I proudly graduated from Tanta University in 2024
              with a major in Computer Science.
            </p>
            <p>
              I embarked on my front-end development career in November 2024, starting with
              foundational tasks and progressively taking on more complex challenges. Now, I'm
              actively developing projects using modern technologies like React, building
              intuitive and dynamic user experiences.
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutSec

import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    // Replace with your actual social media links
    const socialLinks = [
      {
        name: "GitHub",
        icon: "fa-brands fa-github",
        url: "https://github.com/Ashraf-khaled-w",
      },
      {
        name: "LinkedIn",
        icon: "fa-brands fa-linkedin",
        url: "https://www.linkedin.com/in/ashraf-khaled-663299293/",
      },

      // Add more social links if needed
    ];

    return (
      <footer className="bg-[#393E46] text-gray-400 py-2 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} Ashraf Khaled. All rights reserved.</p>
            <p className="text-sm">Designed & Built by Ashraf Khaled</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ashraf Khaled on ${link.name}`}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
}

export default Footer

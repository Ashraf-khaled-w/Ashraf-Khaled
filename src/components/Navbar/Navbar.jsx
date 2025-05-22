import React, { useState } from "react";
import styles from "./Navbar.module.css";
import NavElement from "../ui/NavElement/NavElement.jsx";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "", text: "Home", icon: "fa-solid fa-house" },
    { path: "/projects", text: "Projects", icon: "fa-solid fa-folder" },
    { path: "/contact", text: "Contact", icon: "fa-solid fa-address-book" },
    { path: "/about", text: "About", icon: "fa-solid fa-user" },
  ];

  return (
    <>
      <nav className="bg-[#222831] flex flex-row items-center justify-between py-4 px-6 sm:px-8 md:px-10 lg:px-12 text-white relative">
        <div id="logo" className={`${styles.logoFont} flex-shrink-0`}>
          Ashraf Khaled
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end">
          <ul className="flex flex-row items-center gap-x-0">
            {navItems.map((item) => (
              <li key={item.path + item.text}>
                <NavElement className={``} path={item.path} text={item.text}>
                  <i className={item.icon}></i>
                </NavElement>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none hover:text-gray-300"
          >
            <i
              className={`fa-solid ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation Menu Container */}
        <div
          className={`
              md:hidden 
              bg-[rgb(18,30,40)] text-white 
              absolute top-full left-0 right-0 
              z-20 shadow-lg border-t border-gray-700
              transition-all duration-500 ease-in-out
              ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }
            `}
        >
          <ul className="flex flex-col items-stretch">
            {navItems.map((item) => (
              <li
                key={item.path + item.text}
                className="w-full border-b border-gray-700 last:border-b-0"
              >
                <NavElement
                  className={`w-full justify-center py-3 px-4 text-base`}
                  path={item.path}
                  text={item.text}
                  showTextInitially={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                </NavElement>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

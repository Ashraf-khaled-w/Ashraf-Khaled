import React from "react";
import styles from "./Layout.module.css";
import Navbar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}

export default Layout;

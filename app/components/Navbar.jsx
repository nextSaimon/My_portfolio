"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use this for client-side navigation in the app directory

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // General function to handle navigation and scrolling to a specific section
  const handleNavClick = (targetId) => {
    if (router.pathname !== "/") {
      // If not on the home page, navigate to home first
      router.push("/");
    }
    // Scroll to target element after a short delay
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div id="Home">
      {/* Desktop Navbar */}
      <nav id="desktop-nav">
        <div
          className="logo"
          data-aos="fade-right"
          onClick={() => handleNavClick("Home")}
        >
          SAIMON
        </div>
        <ul className="nav-links" data-aos="fade-left">
          <li>
            <a onClick={() => handleNavClick("Home")}>Home</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("about")}>About</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("experience")}>Experience</a>
          </li>
          <li>
            <Link href="/project" onClick={toggleMenu}>
              Project
            </Link>
          </li>
          <li>
            <a onClick={() => handleNavClick("contact")}>Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Navbar */}
      <nav id="hamburger-nav">
        <div className="logo" data-aos="fade-right">
          SAIMON
        </div>
        <div className="hamburger-menu" data-aos="fade-left">
          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`menu-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a onClick={() => handleNavClick("Home")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("about")}>About</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("experience")}>Experience</a>
            </li>
            <li>
              <Link href="/project" onClick={toggleMenu}>
                Project
              </Link>
            </li>
            <li>
              <a onClick={() => handleNavClick("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use this for client-side navigation in the app directory
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

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
    <div id="Home" className="z-[1000]">
      {/* Desktop Navbar */}
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <FadeContent
          blur={true}
          duration={900}
          easing="ease-out"
          initialOpacity={0}
        >
          <nav id="desktop-nav">
            <div className="logo" onClick={() => handleNavClick("Home")}>
              SAIMON
            </div>
            <ul className="nav-links">
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
        </FadeContent>
      </AnimatedContent>
      {/* Mobile Hamburger Navbar */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <FadeContent
          blur={true}
          duration={900}
          easing="ease-out"
          initialOpacity={0}
        >
          <nav id="hamburger-nav">
            <div className="logo">SAIMON</div>
            <div className="hamburger-menu">
              <div
                className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <ul
                className={`menu-links ${
                  isMenuOpen
                    ? "open  border border-gray-400 rounded-[10px]"
                    : ""
                }`}
              >
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
        </FadeContent>
      </AnimatedContent>
    </div>
  );
};

export default Navbar;

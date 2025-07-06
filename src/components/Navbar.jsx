"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicks outside the navbar and scroll events to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isMenuOpen]);

  // Update z-index for projects section
  useEffect(() => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.style.zIndex = isMenuOpen ? "-1" : "0";
    }
  }, [isMenuOpen]);

  const handleNavClick = (targetId) => {
    if (router.pathname !== "/") {
      router.push("/");
    }
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <div id="Home" className="z-[1000]" ref={navRef}>
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
                  isMenuOpen ? "open border border-gray-400" : ""
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

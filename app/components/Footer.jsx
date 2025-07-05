"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation

const Footer = () => {
  const router = useRouter();

  const handleFooterClick = (targetId) => {
    if (router.pathname !== "/") {
      router.push("/"); // Navigate to home page
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    router.push("/project"); // Navigate to project page
  };

  return (
    <footer style={{ overflow: "hidden" }}>
      <nav>
        <ul className="nav-links">
          <li style={{ cursor: "pointer" }}>
            <a onClick={() => handleFooterClick("Home")}>Home</a>
          </li>
          <li style={{ cursor: "pointer" }}>
            <a onClick={() => handleFooterClick("about")}>About</a>
          </li>
          <li style={{ cursor: "pointer" }}>
            <a onClick={() => handleFooterClick("experience")}>Experience</a>
          </li>
          <li style={{ cursor: "pointer" }}>
            <a onClick={handleProjectClick}>Project</a>
          </li>
          <li style={{ cursor: "pointer" }}>
            <a onClick={() => handleFooterClick("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
      <p>
        {/* update the year every new year */}
        &#169; {new Date().getFullYear()} Saimon. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

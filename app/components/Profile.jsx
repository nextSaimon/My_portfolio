"use client";
import React from "react";
import SocialIcons from "./SocialIcons";
import profile_img from "@/public/profile-pic.jpg";
import Image from "next/image";

const Profile = () => {
  const m_b1_1 = () => {
    const btn1 = document.getElementById("btn1");
    btn1.style.color = "white";
    btn1.style.background = "black";
    const btn2 = document.getElementById("btn2");
    btn2.style.color = "black";
    btn2.style.background = "white";
  };

  const m_b1_2 = () => {
    const btn1 = document.getElementById("btn1");
    btn1.style.color = "black";
    btn1.style.background = "white";
    const btn2 = document.getElementById("btn2");
    btn2.style.color = "white";
    btn2.style.background = "black";
  };

  const m_b2_1 = () => {
    const btn2 = document.getElementById("btn2");
    btn2.style.color = "black";
    btn2.style.background = "white";
    const btn1 = document.getElementById("btn1");
    btn1.style.color = "white";
    btn1.style.background = "black";
  };

  const m_b2_2 = () => {
    const btn2 = document.getElementById("btn2");
    btn2.style.color = "white";
    btn2.style.background = "black";
    const btn1 = document.getElementById("btn1");
    btn1.style.color = "black";
    btn1.style.background = "white";
  };
  const handleNavClick = (targetId) => {
    // Scroll to target element after a short delay
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <section id="profile" style={{ overflow: "hidden" }}>
      <div className="section__pic-container">
        <Image
          className="profile-pic"
          src={profile_img}
          alt="Saimon's Profile"
          layout="intrinsic" // Let the image scale based on its container size
          width={400} // Default width
          height={400} // Default height
          placeholder="blur" // Blur effect while loading
          quality={100}
          style={{ objectFit: "cover", borderRadius: "50%" }} // Optional: rounded shape
          data-aos="fade-left"
        />
        {/* <img
          src="./profile-pic.jpg"
          alt=""
          data-aos="fade-right"
          className="profile-pic"
        /> */}
      </div>

      <div className="section__text">
        <p className="section__text__p1 " data-aos="fade-right">
          Hello, I&apos;m
        </p>
        <h1 className="title" data-aos="fade-left">
          Saimon
        </h1>
        <p className="section__text__p2" data-aos="fade-right">
          Frontend Developer
        </p>
        <div className="btn-container" data-aos="fade-up">
          <button
            className="btn btn-color-1"
            id="btn1"
            onMouseOver={m_b1_1}
            onMouseOut={m_b1_2}
            onClick={() => handleNavClick("about")}
          >
            About Me
          </button>
          <button
            className="btn btn-color-2"
            id="btn2"
            onMouseOver={m_b2_1}
            onMouseOut={m_b2_2}
            onClick={() => handleNavClick("contact")}
          >
            Contact Info
          </button>
        </div>
        <SocialIcons />
      </div>
      <a href="#about">
        <i id="profile_ico" className="fas fa-arrow-down icon arrow"></i>
      </a>
    </section>
  );
};

export default Profile;

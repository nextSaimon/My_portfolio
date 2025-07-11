"use client";
import React from "react";
import SocialIcons from "./SocialIcons";
import profile_img from "../../public/profile-pic.jpg";
import Image from "next/image";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

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
    setIsMenuOpen(false);
  };

  return (
    <section id="profile" style={{ overflow: "hidden" }}>
      <div className="section__pic-container">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <Image
              className="profile-pic"
              src={profile_img}
              alt="Saimon's Profile"
              width={400} // Default width
              height={400} // Default height
              placeholder="blur" // Blur effect while loading
              quality={100}
              style={{ objectFit: "cover", borderRadius: "50%" }} // Optional: rounded shape
            />
          </FadeContent>
        </AnimatedContent>
      </div>

      <div className="section__text">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <p className="section__text__p1 ">Hello, I&apos;m</p>
        </AnimatedContent>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="title">Saimon</h1>
        </FadeContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <p className="section__text__p2">Full Stack Developer</p>
        </AnimatedContent>
        <div className="btn-container">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={0.3}
            threshold={0.2}
            delay={0}
          >
            <button
              className="btn btn-color-1"
              id="btn1"
              onMouseOver={m_b1_1}
              onMouseOut={m_b1_2}
              onClick={() => handleNavClick("about")}
            >
              About Me
            </button>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={0.3}
            threshold={0.2}
            delay={0}
          >
            <button
              className="btn btn-color-2"
              id="btn2"
              onMouseOver={m_b2_1}
              onMouseOut={m_b2_2}
              onClick={() => handleNavClick("contact")}
            >
              Contact Info
            </button>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <SocialIcons />
        </AnimatedContent>
      </div>
      <a href="#about">
        <i id="profile_ico" className="fas fa-arrow-down icon arrow"></i>
      </a>
    </section>
  );
};

export default Profile;

"use client";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import React from "react";
import AnimatedContent from "./../assets/AnimatedContent/AnimatedContent";
import FadeContent from "../assets/FadeContent/FadeContent";

const Contact = () => {
  return (
    <section id="contact" style={{ overflow: "hidden" }}>
      <AnimatedContent
        distance={150}
        direction="vertical" // Fixed typo: "vartical" → "vertical"
        reverse={true}
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
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
        </FadeContent>
      </AnimatedContent>

      <AnimatedContent
        distance={150}
        direction="horizontal" // Fixed typo: "vartical" → "vertical"
        reverse={true}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <div className="contact-info-upper-container w-[350px]">
          <div className="contact-info-container">
            <i className="fas fa-envelope icon contact-icon email-icon">
              <MdEmail />
            </i>
            <p>
              <a href="mailto:saimonss5432@gmail.com">saimonss5432@gmail.com</a>
            </p>
          </div>
        </div>
      </AnimatedContent>
      <AnimatedContent
        distance={150}
        direction="horizontal" // Fixed typo: "vartical" → "vertical"
        reverse={false}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <div className="contact-info-upper-container w-[350px]">
          <div className="contact-info-container">
            <i className="fab fa-facebook icon contact-icon">
              <BsFacebook />
            </i>
            <p>
              <a
                href="https://www.facebook.com/next.saimon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>{" "}
            <b>||</b>
            <i className="fab fa-instagram icon contact-icon">
              <AiOutlineInstagram />
            </i>
            <p>
              <a
                href="https://www.instagram.com/next.saimon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Contact;

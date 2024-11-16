import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import about_img from "@/public/about-pic.jpg";

// Function to calculate the age
const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

// Function to calculate years of experience
const calculateExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

const About = () => {
  const age = calculateAge(new Date(2006, 8, 15)); // Calculate age (birthday: 15th September 2006)
  const experience = calculateExperience(2021) - 1; // Calculate years of experience since 2021

  return (
    <section id="about" style={{ overflow: "hidden" }}>
      <p
        className="section__text__p1 "
        data-aos="fade-up-right"
        data-aos-offset="40"
      >
        Get To Know More
      </p>
      <h1 className="title" data-aos="fade-up-left" data-aos-offset="40">
        About Me
      </h1>
      <div className="section-container">
        <div className="section__pic-container">
          <Image
            className="about-pic"
            src={about_img}
            alt="Saimon's Profile"
            layout="intrinsic"
            width={400}
            height={400}
            placeholder="blur"
            quality={100}
            style={{ objectFit: "cover" }}
          />
          {/* <img
            src="about-pic.jpg"
            alt=""
            data-aos="zoom-in-up"
            className="about-pic"
          /> */}
        </div>
        <div className="about-details-container">
          <div className="about-containers  w-[100px] mx-auto">
            <div
              className="details-container text-center "
              data-aos="fade-up-right"
            >
              <i className="fas fa-briefcase icon">
                <FaBriefcase className="mx-auto" />
              </i>
              <h3>Experience</h3>
              <p>
                {experience}+ years <br />
                Frontend Development <br /> Other skill+
              </p>
            </div>
            {/* <div className="details-container" data-aos="fade-up-left">
              <i className="fas fa-graduation-cap icon">
                <FaGraduationCap className="mx-auto" />
              </i>
              <h3>Education</h3>
              <p>
                SSC 2023
                <br />
                HSC 2025
              </p>
            </div> */}
          </div>
          <div className="text-container" data-aos="fade-left">
            <p>It&apos;s me......</p>
            <h1> Saimon 🙋‍♂️</h1>
            <p>💻 A junior frontend developer. 🌐</p>
            <p>🧭 I live in Dhaka, Bangladesh.</p>
            <p>
              ⌛ I am <b>{age}</b> years old.
            </p>
            <p>
              🤓 I am learning 🌐 Web Development, and I can also edit 📷
              photos, 📽️ videos, Word, Excel, etc.
            </p>
            <p>⚡ Fun fact: I started coding at 13!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

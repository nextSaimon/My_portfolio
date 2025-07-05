"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faTable,
  faFileWord,
  faFilePowerpoint,
  faImage,
  faBezierCurve,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedContent from "../assets/AnimatedContent/AnimatedContent";
import FadeContent from "../assets/FadeContent/FadeContent";

const Experience = () => {
  const frontendSkills = [
    {
      name: "HTML",
      level: "Experienced",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      class: "fa-brands fa-html5",
    },
    {
      name: "CSS",
      level: "Experienced",
      icon: <FontAwesomeIcon icon={faCss3Alt} />,
      class: "fa-brands fa-css3",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faJsSquare} />,
      class: "fa-brands fa-js",
    },
    {
      name: "React",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faReact} />,
      class: "fa-brands fa-react",
    },
    {
      name: "NextJS",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faReact} />, // No specific Next.js icon; using React icon
      class: "fa-brands fa-react",
    },
    {
      name: "TailwindCSS",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faCss3Alt} />, // No Tailwind CSS icon; using CSS icon
      class: "fa-brands fa-react",
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faBootstrap} />,
      class: "fa-brands fa-bootstrap",
    },
    {
      name: "Git",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faGithub} />,
      class: "fa-solid fa-code-branch",
    },
  ];

  const otherSkills = [
    {
      name: "Photoshop",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faImage} />, // Generic image icon for Photoshop
      class: "fa-regular fa-image",
    },
    {
      name: "Illustrator",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faBezierCurve} />, // Bezier curve for Illustrator
      class: "fa-solid fa-bezier-curve",
    },
    {
      name: "Excel",
      level: "Experienced",
      icon: <FontAwesomeIcon icon={faTable} />, // Table icon for Excel
      class: "fa-solid fa-table",
    },
    {
      name: "Word",
      level: "Experienced",
      icon: <FontAwesomeIcon icon={faFileWord} />,
      class: "fa-regular fa-file-word",
    },
    {
      name: "PowerPoint",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faFilePowerpoint} />,
      class: "fa-solid fa-file-powerpoint",
    },
    {
      name: "Python",
      level: "Intermediate",
      icon: <FontAwesomeIcon icon={faPython} />,
      class: "fa-brands fa-python",
    },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={index % 2 === 0 ? false : true}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
        key={index}
        Zindex={false}
      >
        <article>
          <i className={skill.class}>{skill.icon}</i>
          <div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        </article>
      </AnimatedContent>
    ));

  return (
    <section id="experience" style={{ overflow: "hidden" }}>
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
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
        </FadeContent>
      </AnimatedContent>

      <div className="experience-details-container">
        <div className="about-containers justify-center">
          <div className="details-container max-w-[600px]">
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
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="experience-sub-title">Frontend Development</h2>
              </FadeContent>
            </AnimatedContent>
            <div className="article-container">
              {renderSkills(frontendSkills)}
            </div>
          </div>
          <div className="details-container">
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
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="experience-sub-title">Other Skills</h2>
              </FadeContent>
            </AnimatedContent>
            <div className="article-container">{renderSkills(otherSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

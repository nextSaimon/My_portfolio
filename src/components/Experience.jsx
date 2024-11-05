import React from "react";

const Experience = () => {
    const frontendSkills = [
        { name: "HTML", level: "Experienced", icon: "fa-brands fa-html5" },
        { name: "CSS", level: "Experienced", icon: "fa-brands fa-css3" },
        { name: "JavaScript", level: "Basic", icon: "fa-brands fa-js" },
        { name: "React", level: "Intermediate", icon: "fa-brands fa-react" },
        { name: "Bootstrap", level: "Intermediate", icon: "fa-brands fa-bootstrap" },
        { name: "Git", level: "Intermediate", icon: "fa-solid fa-code-branch" },
    ];

    const otherSkills = [
        { name: "Photoshop", level: "Intermediate", icon: "fa-regular fa-image" },
        { name: "Illustrator", level: "Intermediate", icon: "fa-solid fa-bezier-curve" },
        { name: "Excel", level: "Experienced", icon: "fa-solid fa-table" },
        { name: "Word", level: "Experienced", icon: "fa-regular fa-file-word" },
        { name: "PowerPoint", level: "Intermediate", icon: "fa-solid fa-file-powerpoint" },
        { name: "Python", level: "Intermediate", icon: "fa-brands fa-python" },
    ];

    const renderSkills = (skills) =>
        skills.map((skill, index) => (
            <article key={index} data-aos={`zoom-in-${index % 2 === 0 ? "right" : "left"}`}>
                <i className={skill.icon}></i>
                <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                </div>
            </article>
        ));

    return (
        <section id="experience" style={{ overflow: "hidden" }}>
            <p className="section__text__p1" data-aos="flip-left">Explore My</p>
            <h1 className="title" data-aos="flip-right">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container" data-aos="zoom-in-right">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            {renderSkills(frontendSkills)}
                        </div>
                    </div>
                    <div className="details-container" data-aos="zoom-in-left">
                        <h2 className="experience-sub-title">Other Skills</h2>
                        <div className="article-container">
                            {renderSkills(otherSkills)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

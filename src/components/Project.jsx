import React from "react";

const Contact = () => {
    const Projects = [
        {
            title: "Project One",
            img: "./assets/project-1.png",
            github: "#",
            demo: "#"
        },
        {
            title: "Project One",
            img: "./assets/project-1.png",
            github: "#",
            demo: "#"
        }, {
            title: "Project One",
            img: "./assets/project-1.png",
            github: "#",
            demo: "#"
        }
    ]
    return (
        <section id="projects" style={{ overflow: 'hidden' }}>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {Projects.map((data) => (
                        <div className="details-container color-container">
                            <div className="article-container" >
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">{data.title}</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={data.github}
                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={data.demo}
                                >
                                    Live Demo
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Contact;

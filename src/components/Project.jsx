import React from "react";

const Project = () => {
    const Projects = [
        {
            title: "AOS Helper",
            img: "./assets/project-1.png",
            github: "https://github.com/nextSaimon/AOS-Helper",
            demo: "https://marketplace.visualstudio.com/items?itemName=nextsaimon.aos-helper"
        },
    ];

    return (
        <section id="projects" style={{ overflow: 'hidden' }}>
            <p className="section__text__p1" data-aos="fade-down" >Browse My Recent</p>
            <h1 className="title" data-aos="fade-down">Projects</h1>

            <div className="container my-5">
                <div className="row justify-content-center"> {/* Changed to justify-content-center */}
                    {Projects.map((data, index) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mt-4" key={index}> {/* Changed to col-12 for mobile */}
                            <div className="card shadow" style={{ width: "100%" }} data-aos="fade-up"> {/* Changed width to 100% */}
                                <div className="img">
                                    <img
                                        className="card-img-top"
                                        src={data.img}
                                        alt={data.title}
                                    />
                                </div>

                                <div className="card-body text-center">
                                    <h4 className="card-title">{data.title}</h4>
                                    <button
                                        className="btn btn-outline-dark me-2 mt-2"
                                        onClick={() => window.open(data.github, "_blank")}
                                        style={{ borderRadius: 50 }}
                                    >
                                        GitHub
                                    </button>
                                    <button
                                        className="btn btn-outline-dark mt-2"
                                        onClick={() => window.open(data.demo, "_blank")}
                                        style={{ borderRadius: 50 }}
                                    >
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;

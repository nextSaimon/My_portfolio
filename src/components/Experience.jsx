import React from "react";

const Experience = () => {
    return (
        <section id="experience" style={{ overflow: "hidden" }}>
            <p className="section__text__p1" data-aos="flip-left">Explore My</p>
            <h1 className="title" data-aos="flip-right">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container" data-aos="zoom-in-right">
                        <h2 className="experience-sub-title" data-aos="zoom-in-right">Frontend Development</h2>
                        <div className="article-container">
                            <article data-aos="zoom-in-right">
                                <i className="fa-brands fa-html5"></i>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-left">
                                <i className="fa-brands fa-css3"></i>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-right">
                                <i className="fa-brands fa-js"></i>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-left">
                                <i className="fa-brands fa-react"></i>
                                <div>
                                    <h3>React</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-right">
                                <i class="fa-brands fa-bootstrap"></i>
                                <div>
                                    <h3>bootstrap</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-left">
                                <i className="fa-solid fa-code-branch"></i>
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container" data-aos="zoom-in-left">
                        <h2 className="experience-sub-title" data-aos="zoom-in-left">Other Skills</h2>
                        <div className="article-container">
                            <article data-aos="zoom-in-right">
                                <i className="fa-regular fa-image"></i>
                                <div>
                                    <h3>Photoshop</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-left">
                                <i className="fa-solid fa-bezier-curve"></i>
                                <div>
                                    <h3>Illustrator</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-right">
                                <i className="fa-solid fa-table"></i>
                                <div>
                                    <h3>Excel</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-left">
                                <i className="fa-regular fa-file-word"></i>
                                <div>
                                    <h3>Word</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-right">
                                <i className="fa-solid fa-file-powerpoint"></i>
                                <div>
                                    <h3>PowerPoint</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article data-aos="zoom-in-left">
                                <i className="fa-brands fa-python"></i>
                                <div>
                                    <h3>Python</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Experience;

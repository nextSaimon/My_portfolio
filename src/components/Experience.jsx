import React from "react";

const Experience = () => {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <i className="fa-brands fa-html5"></i>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-brands fa-css3"></i>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-brands fa-js"></i>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-brands fa-react"></i>
                                <div>
                                    <h3>React</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <i class="fa-brands fa-bootstrap"></i>
                                <div>
                                    <h3>bootstrap</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-solid fa-code-branch"></i>
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Other Skills</h2>
                        <div className="article-container">
                            <article>
                                <i className="fa-regular fa-image"></i>
                                <div>
                                    <h3>Photoshop</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-solid fa-bezier-curve"></i>
                                <div>
                                    <h3>Illustrator</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-solid fa-table"></i>
                                <div>
                                    <h3>Excel</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-regular fa-file-word"></i>
                                <div>
                                    <h3>Word</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <i className="fa-solid fa-file-powerpoint"></i>
                                <div>
                                    <h3>PowerPoint</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
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
            <a href="#contact"><i className="fas fa-arrow-down icon arrow"></i></a>
        </section>

    );
};

export default Experience;

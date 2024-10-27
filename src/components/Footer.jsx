import React from "react";

const Footer = () => {
    return (
        <footer style={{ overflow: "hidden" }}>
            <nav>
                <ul className="nav-links" data-aos="fade-up">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <p data-aos="zoom-in-up" data-aos-offset="0" data-aos-duration="200">&#169; 2024 Saimon. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;

import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { MdEmail } from "react-icons/md"; 
import React from "react";

const Contact = () => {
    return (
        <section id="contact" style={{ overflow: "hidden" }}>
            <p className="section__text__p1" data-aos="zoom-in-up">Get in Touch</p>
            <h1 className="title" data-aos="zoom-in-down">Contact Me</h1>
            <div className="contact-info-upper-container" data-aos="zoom-in">
                <div className="contact-info-container">

                    <i className="fas fa-envelope icon contact-icon email-icon" data-aos="fade-left"><MdEmail /></i>
                    <p data-aos="fade-right"><a href="mailto:saimonss5432@gmail.com">saimonss5432@gmail.com</a></p>

                </div>
            </div>
            <div className="contact-info-upper-container" data-aos="zoom-in">
                <div className="contact-info-container">
                    <i className="fab fa-facebook icon contact-icon" data-aos="fade-left"><BsFacebook /></i>
                    <p data-aos="fade-right"><a href="https://www.facebook.com/next.saimon" target="_blank" rel="noopener noreferrer">Facebook</a></p> <b>||</b>
                    <i className="fab fa-instagram icon contact-icon" data-aos="fade-left"><AiOutlineInstagram /></i>
                    <p data-aos="fade-right"><a href="https://www.instagram.com/next.saimon/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <i className="fas fa-envelope icon contact-icon email-icon"></i>
                    <p><a href="mailto:saimonss5432@gmail.com">saimonss5432@gmail.com</a></p>
                </div>
            </div>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <i className="fab fa-facebook icon contact-icon"></i>
                    <p><a href="https://www.facebook.com/next.saimon" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <i className="fab fa-instagram icon contact-icon"></i>
                    <p><a href="https://www.instagram.com/next.saimon/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useEffect, useState } from 'react';

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

const About = () => {
    const [age, setAge] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        setAge(calculateAge(new Date(2006, 8, 15))); // September is month 8

        const checkScreenWidth = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        checkScreenWidth(); // Initial check
        window.addEventListener('resize', checkScreenWidth);

        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);

    return (
        <section id="about" style={{ overflow: "hidden" }}>
            <p
                className="section__text__p1"
                data-aos="fade-up-right"
                data-aos-offset={isSmallScreen ? '40' : undefined}
            >
                Get To Know More
            </p>
            <h1 className="title" data-aos="fade-up-left" data-aos-offset={isSmallScreen ? '40' : undefined}>About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src="/assets/about-pic.jpg" alt="Saimon" className="about-pic" data-aos="zoom-in-up" data-aos-offset={isSmallScreen ? '40' : undefined} />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container" data-aos="fade-up-right">
                            <i className="fas fa-briefcase icon"></i>
                            <h3>Experience</h3>
                            <p>2+ years <br />Frontend Development <br /> Other skill+</p>
                        </div>
                        <div className="details-container" data-aos="fade-up-left">
                            <i className="fas fa-graduation-cap icon"></i>
                            <h3>Education</h3>
                            <p>SSC 2023<br />HSC 2025</p>
                        </div>
                    </div>
                    <div className="text-container" data-aos="fade-left">
                        <p>It's me......</p>
                        <h1> Saimon 🙋‍♂️</h1>
                        <p>💻 A junior frontend developer. 🌐</p>
                        <p>🧭 I live in Dhaka, Bangladesh.</p>
                        <p>⌛ I am <b>{age}</b> years old.</p>
                        <p>🤓 I am learning 🌐 Web Development, and I can also edit 📷 photos, 📽️ videos, Word, Excel, etc.</p>
                        <p>⚡ Fun fact: I started coding at 13!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

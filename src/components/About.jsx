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

    useEffect(() => {
        setAge(calculateAge(new Date(2006, 8, 15))); // September is month 8
    }, []);


    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    {/* Removed the redundant word "Profile picture" from alt text */}
                    <img src="/assets/about-pic.jpg" alt="Saimon" className="about-pic" />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <i className="fas fa-briefcase icon"></i>
                            <h3>Experience</h3>
                            <p>2+ years <br />Frontend Development <br /> Other skill+</p>
                        </div>
                        <div className="details-container">
                            <i className="fas fa-graduation-cap icon"></i>
                            <h3>Education</h3>
                            <p>SSC 2023<br />HSC 2025</p>
                        </div>
                    </div>
                    <div className="text-container">
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
            <a href="#experience"><i className="fas fa-arrow-down icon arrow"></i></a>
        </section>
    );
};

export default About;

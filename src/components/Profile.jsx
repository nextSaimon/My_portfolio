import React from 'react';
import SocialIcons from './SocialIcons';


const Profile = () => {
    const m_b1_1 = () => {
        const btn1 = document.getElementById('btn1');
        btn1.style.color = 'white';
        btn1.style.background = 'black';
        const btn2 = document.getElementById('btn2');
        btn2.style.color = 'black';
        btn2.style.background = 'white';
    }

    const m_b1_2 = () => {
        const btn1 = document.getElementById('btn1');
        btn1.style.color = 'black';
        btn1.style.background = 'white';
        const btn2 = document.getElementById('btn2');
        btn2.style.color = 'white';
        btn2.style.background = 'black';
    }


    const m_b2_1 = () => {
        const btn2 = document.getElementById('btn2');
        btn2.style.color = 'black';
        btn2.style.background = 'white';
        const btn1 = document.getElementById('btn1');
        btn1.style.color = 'white';
        btn1.style.background = 'black';
    }

    const m_b2_2 = () => {
        const btn2 = document.getElementById('btn2');
        btn2.style.color = 'white';
        btn2.style.background = 'black';
        const btn1 = document.getElementById('btn1');
        btn1.style.color = 'black';
        btn1.style.background = 'white';
    }


    return (
        <section id="profile">

            <div className="section__pic-container">
                <img className="profile-pic" src="/assets/profile-pic.jpg" alt="Saimon's Profile" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Saimon</h1>
                <p className="section__text__p2">Frontend Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-1" id="btn1" onMouseOver={m_b1_1} onMouseOut={m_b1_2} onClick={() => window.location.href = "#about"}>About Me</button>
                    <button className="btn btn-color-2" id="btn2" onMouseOver={m_b2_1} onMouseOut={m_b2_2} onClick={() => window.location.href = "#contact"}>Contact Info</button>
                </div>
                <SocialIcons />
            </div>
            <a href="#about"><i id="profile_ico" className="fas fa-arrow-down icon arrow"></i></a>

        </section>
    );
};

export default Profile;

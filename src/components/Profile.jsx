import React from 'react';
import SocialIcons from './SocialIcons';


const Profile = () => {
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
                    <button className="btn btn-color-1" onClick={() => window.location.href = "#about"}>About Me</button>
                    <button className="btn btn-color-2" onClick={() => window.location.href = "#contact"}>Contact Info</button>
                </div>
                <SocialIcons />
            </div>
            <a href="#about"><i id="profile_ico" className="fas fa-arrow-down icon arrow"></i></a>

        </section>
    );
};

export default Profile;

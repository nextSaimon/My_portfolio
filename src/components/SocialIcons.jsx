import React from "react";

const SocialIcons = () => {
    return (
        <div id="socials-container">
            <i className="fab fa-facebook icon" onClick={() => window.open('https://www.facebook.com/next.saimon', '_blank')}></i>
            <i className="fab fa-instagram icon" onClick={() => window.open('https://www.instagram.com/next.saimon/', '_blank')}></i>
            <i className="fab fa-github icon" onClick={() => window.open('https://github.com/nextSaimon', '_blank')}></i>
        </div>
    );
};

export default SocialIcons;

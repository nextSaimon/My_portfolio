import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleFooterClick = (targetId) => {
        if (location.pathname !== '/') {
            navigate('/');
        }
        setTimeout(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleProjectClick = () => {
        navigate('/project');
    };

    return (
        <footer style={{ overflow: "hidden" }}>
            <nav>
                <ul className="nav-links" data-aos="fade-up">
                    <li style={{ cursor: 'pointer' }}>
                        <a onClick={() => handleFooterClick('Home')}>Home</a>
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                        <a onClick={() => handleFooterClick('about')}>About</a>
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                        <a onClick={() => handleFooterClick('experience')}>Experience</a>
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                        <a onClick={handleProjectClick}>Project</a>
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                        <a onClick={() => handleFooterClick('contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
            <p data-aos="zoom-in-up" data-aos-offset="0" data-aos-duration="200">
                &#169; 2024 Saimon. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div id='Home'>
            {/* Desktop Navbar */}
            <nav id="desktop-nav">
                <div className="logo" data-aos="fade-right">SAIMON</div>
                <ul className="nav-links" data-aos="fade-left">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Hamburger Navbar */}
            <nav id="hamburger-nav" >
                <div className="logo" data-aos="fade-right">Saimon</div>
                <div className="hamburger-menu" data-aos="fade-left">
                    {/* Hamburger Icon */}
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Menu Links */}
                    <ul className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a href="#Home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Importing CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">My Portfolio</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

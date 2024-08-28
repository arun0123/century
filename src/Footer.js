// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Arun p s All rights reserved.</p>
            <div className="social-media">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* Add more social links as needed */}
            </div>
        </footer>
    );
}

export default Footer;

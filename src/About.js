// src/components/About.js
import React from 'react';
import './About.css'; // Importing CSS for styling

const About = () => {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>
            <p>Hello! I'm Arun p s, a web developer with a passion for building smooth websites .</p>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>react-js</li>
                    <li>Redux</li>
                    <li>figma</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </section>
    );
}

export default About;

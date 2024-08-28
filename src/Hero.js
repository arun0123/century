// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Importing CSS for styling

const Hero = () => {
    return (
        <section className="hero" id="home">
            <h1>Hello, I'm Arun ps </h1>
            <p>I'm a web developer Welcome to my portfolio!</p>
            <a href="#projects" className="cta-button">View My Work</a>
        </section>
    );
}

export default Hero;

import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import './App.css';
import Hero from './Hero';
import Footer from './Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero/>
            <About />
            <Projects />
            <Contact />
            <Footer/>
        </div>
    );
}

export default App;

// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Import any custom CSS for styling

import image1 from "./assets/ad.jpg"
import image2 from "./assets/ar.jpg"

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-slide">
                    <img src={image1} alt="Project 1" />
                    <h3>Project 1</h3>
                </div>
                <div className="carousel-slide">
                    <img src={image2} alt="Project 2" />
                    <h3>Project 2</h3>
                </div>

                  <div className="carousel-slide">
                    <img src={image2} alt="Project 2" />
                    <h3>Project 2</h3>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
}

export default Carousel;

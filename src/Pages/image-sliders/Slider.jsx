import React, { useRef, useEffect } from 'react';
import './Slider.css';
import image from './../../assets/image/R_3.webp';
import image_1 from './../../assets/image/full-banner3.webp';
import image_2 from './../../assets/image/R3_image.jpg';

export const Slider = () => {
  const slidesRef = useRef(null);

  const handleMouseEnter = () => {
    slidesRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    slidesRef.current.style.animationPlayState = 'running';
  };

  useEffect(() => {
    const slidesElement = slidesRef.current;
    slidesElement.addEventListener('mouseenter', handleMouseEnter);
    slidesElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slidesElement.removeEventListener('mouseenter', handleMouseEnter);
      slidesElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div>
         <div className="marqueecss">
         <marquee><b></b>WELCOME TO VIRTUE BUILDERS!!!</marquee>
         </div>
      
      <div className="slider">

        <div className="slides" ref={slidesRef}>
          <div className="slide">
            <img src={image} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={image_1} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={image_2} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

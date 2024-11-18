import React from 'react';
import './Slider.css';
import image from './../../assets/image/R1_image.jpg';
import image_1 from './../../assets/image/R2_image.jpg';

export const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image_1} className="d-block w-100" alt="Slide 2" />
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
  );
};

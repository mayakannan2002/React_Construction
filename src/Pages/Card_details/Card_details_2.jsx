import React, { useState } from 'react';
import image from './../../assets/image/N2.jpg';
import image1 from './../../assets/image/B1.jpeg';
import image2 from './../../assets/image/B2.jpeg';
import image3 from './../../assets/image/B3.jpeg';

import './Card_details_1.css';

const CardDetails1 = () => {
  const [selectedImage, setSelectedImage] = useState(image); 
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); 
  };

  return (
    <div className="container"> 
      <div className="content-section">
        <h2 className="headings"><b>Building Areas and Prices</b></h2>
        <p>We specialize in high-quality construction projects tailored to your needs. Our offerings include:</p>
        <ul>
          <li>Residential areas starting at ₹2,500/sq.ft</li>
          <li>Commercial spaces starting at ₹3,000/sq.ft</li>
          <li>Custom designs available at competitive prices</li>
        </ul>

        <h3>Why Choose Us?</h3>
        <p>We are committed to providing exceptional construction services with the highest level of professionalism and care. Here's why our clients choose us:</p>
        <ul>
          <li>Experienced architects and engineers</li>
          <li>High-quality, sustainable materials</li>
          <li>Timely project delivery</li>
        </ul>

        <h3>Our Services Include:</h3>
        <ul>
          <li><strong>Residential Construction:</strong> Building dream homes with precision and excellence.</li>
          <li><strong>Commercial Construction:</strong> Designing and constructing office spaces, retail, and business hubs.</li>
          <li><strong>Custom Design & Build:</strong> Tailored designs for your unique needs and preferences.</li>
        </ul>
      </div>

      {/* Product Preview Container */}
      <div className="product-preview-container">
        {/* Large Image Section */}
        <div className="large-image-section">
          <img className="large-image" src={selectedImage} alt="Product Preview" />
        </div>

        {/* Thumbnail Images Section */}
        <div className="thumbnail-section">
          <img
            className="thumbnail"
            src={image}
            alt="Product Thumbnail 1"
            onClick={() => handleImageClick(image)}
          />
          <img
            className="thumbnail"
            src={image1}
            alt="Product Thumbnail 2"
            onClick={() => handleImageClick(image1)}
          />
          <img
            className="thumbnail"
            src={image2}
            alt="Product Thumbnail 3"
            onClick={() => handleImageClick(image2)}
          />
          <img
            className="thumbnail"
            src={image3}
            alt="Product Thumbnail 4"
            onClick={() => handleImageClick(image3)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails1;

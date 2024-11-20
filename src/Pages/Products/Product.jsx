import React from 'react';
import './Product.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importing images
import Nature_1 from '../../assets/image/N1.jpg';
import Nature_2 from '../../assets/image/N2.jpg';
import Nature_3 from '../../assets/image/N3.jpg';
import Nature_4 from '../../assets/image/N4.jpg';

const Product = () => {
  const buildings = [
    {
      title: 'Virtue Royal City',
      location: 'Sarjapura, Bangalore',
      image: Nature_1,
      link: '/card-details1',
    },
    {
      title: 'Virtue Royal Nisarga',
      location: 'Kengeri, Bangalore',
      image: Nature_2,
      link: '/card-details2',
    },
    {
      title: 'Virtue Eshas Courtyard',
      location: 'Sarjapura, Bangalore',
      image: Nature_3,
      link: '/card-details3',
    },
    {
      title: 'Virtue Royal City',
      location: 'Kengeri, Bangalore',
      image: Nature_4,
      link: '/card-details4',
    },
  ];

  return (
    <div className="product-section">
      {/* Header Section */}
      <h2 className="product-title">Building Details</h2>

      {/* Card Section */}
      <div className="product-container">
        {buildings.map((building, index) => (
          <div key={index} className="product-card">
            <img src={building.image} className="product-card-img" alt={building.title} />
            <div className="product-card-body">
              <h5 className="product-card-title">{building.title}</h5>
              <p className="product-card-text">
                <i className="fas fa-location-dot"></i> {building.location}
              </p>
              <a href={building.link} className="product-btn-primary">
                More Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

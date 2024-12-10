import React, { useState } from 'react';
import './Poppup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="popup-icon-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="popup-icon">📝</div>
      {showPopup && (
        <div className="popup-content">
          <h3>Connect with Virtue Builders</h3>
          <p>PHONE: +12457836913, +12457836913</p>
          <p>EMAIL: buildervirtue@info.com</p>
        </div>
      )}
    </div>
  );
};

export default Popup;

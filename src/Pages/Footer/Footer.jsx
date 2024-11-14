import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-section">
        <h3>About Us</h3>
        <p>We provide the best services in the industry.</p>
        <nav>
          <a href="#home">Home</a> |
          <a href="#services">Services</a> | 
          <a href="#about">About</a> | 
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Center Section */}
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div>
          <a href="https://facebook.com">Facebook</a> |
          <a href="https://twitter.com">Twitter</a> |
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <address>
          <p>Email: virtuet@company.com</p>
          <p>Phone: +91 9876543210</p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;

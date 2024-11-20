import React from 'react';
import './Footer.css'; 
import logo from "./../../assets/image/logo-small.png"

function Footer() {
  return (
    <footer className="footer">

      <div className='logosection'>
        
        <img className='logos' src={logo} alt="Logo of company" />
      </div>
      <div className="footer-section">
       <h3>Address</h3>
       <p>Jagadap(post),
        Kaveripattinam,Krishnagiri(district),
        PIN:645322
       </p>
      
        
      </div>

     
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div>
          <a href="https://facebook.com">Facebook</a> |
          <a href="https://twitter.com">Twitter</a> |
          <a href="https://instagram.com">Instagram</a>

<div><p>                                                                     </p></div>
          <nav>
          <a href="#home">Home</a> |
          <a href="#services">Services</a> | 
          <a href="#about">About</a> | 
          <a href="#contact">Contact</a>
        </nav>
        </div>
      </div>

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

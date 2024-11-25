import React from 'react';
import './Footer.css';
import logo from "./../../assets/image/logo-small.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo-section">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p className="footer-title">VIRTUE BUILDERS</p>
            </div>
            <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>Email: info@virtuebuilders.com</p>
                <p>Phone: +91 12345 67890</p>
                <p>Address: 123, Builder Street, Tamil Nadu, India</p>
            </div>
            <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <a href="#facebook">Facebook</a>
                    <a href="#twitter">Twitter</a>
                    <a href="#instagram">Instagram</a>
                    <a href="#linkedin">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

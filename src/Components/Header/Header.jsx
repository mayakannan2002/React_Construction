import React, { useState } from 'react';
import './Header.css'; 
import logo from "./../../assets/image/logo-small.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
  
          <header className="header">
            <div className="logo-section">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="title">VIRTUE BUILDERS</h1>
            </div>
            <button className="toggle-button" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li><a href="\">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/#product-page">Products</a></li>
                    <li><a href="/Contact">Contact</a></li>
                     <div className="search-section">
                <input type="text" placeholder="Search..." className="search-box" />
                <button className="search-button">Search</button>
            </div>
                </ul>
            </nav>
           
        </header>
       
    
    );
};

export default Header;

import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <div className='header'>
        
            <div className='logo'>
                <h1><b>VIRTUE BUILDERS</b></h1>
            </div><br />

        
            <div className='navbar'>
                <ul className='nav-list'>
                    <li><a href="#" className='nav-item'><i className='fas fa-home'></i> Home</a></li>
                    <li><a href="#" className='nav-item'><i className="fas fa-info-circle"></i> About</a></li>
                    <li><a href="#" className='nav-item'><i className='fas fa-concierge-bell'></i> Services</a></li>
                    <li><a href="#" className='nav-item'><i className='fas fa-envelope'></i> Contact</a></li>
                </ul>
            </div>

         
            <div className='search-bar'>
                <input type="text" placeholder='Search...' className='search-input' />
                <button className='search-button'><i className='fas fa-search'></i></button>
            </div>
        </div>
    );
};

export default Header;

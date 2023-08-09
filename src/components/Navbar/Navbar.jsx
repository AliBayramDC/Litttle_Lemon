import React, { useState } from 'react';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.Logo} alt='navlogo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__markazi'><a href='#home'>Home</a></li>
        <li className='p__markazi'><a href='#menu'>Menu</a></li>
        <li className='p__markazi'><a href='#testimonials'>Testimonials</a></li>
        <li className='p__markazi'><a href='#aboutUs'>About Us</a></li>
        <li className='p__markazi'><a href='#reservation'>Reservation</a></li>
        
      </ul>
      
    </nav>
  );
}

export default Navbar;

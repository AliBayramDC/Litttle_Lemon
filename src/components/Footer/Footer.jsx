import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="footerlogo.png" alt="Logo" />
        </div>
        <div className="footer-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#aboutUs">About Us</a></li>
            <li><a href='#reservation'>Reservation</a></li>
          </ul>
        </div>
        <div className="footer-social">
          {/* Enclose the icon components in a div */}
          <div>
            <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.bing.com/search?pglt=41&q=linkedin&cvid=b9fb090594d743089ebe05f40d123361&aqs=edge.0.46j69i57j0j46l3j0j69i65l2.835j0j1&FORM=ANAB01&PC=U531" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.bing.com/search?q=instagram&form=ANNTH1&refig=14eb692c91474220850d8928f99e53df&sp=1&lq=0&filters=ufn%3A%22Instagram%22+sid%3A%22a2113d26-7976-df57-241f-77b7bbb1b4f7%22&asbe=MT&qs=MB&pq=ins&sc=10-3&cvid=14eb692c91474220850d8928f99e53df" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

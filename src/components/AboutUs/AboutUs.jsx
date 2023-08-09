import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling
import images from '../../constants/images';

const AboutUs = () => {
  return (
    <div className="about-us-section" id="aboutUs">
      <div className="about-us-content">
        <h2 className="section-heading">About Us</h2>
        <p className="section-description">
        Welcome to TasteBloom Restaurant. Established in 2012, we're a culinary haven where innovation and tradition converge. Our mission is to transform dining into an artful experience, where every plate is a canvas and every flavor tells a story.

Drawing inspiration from locally-sourced ingredients and global influences, our chefs create dishes that ignite the senses. We believe that exceptional dining is a journey of tastes, textures, and emotions.

At TasteBloom, we celebrate the past while embracing the present, crafting memories one dish at a time.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="about-us-image">
        <img src={images.restaurantchefB} alt="chef" />
      </div>
    </div>
  );
};

export default AboutUs;

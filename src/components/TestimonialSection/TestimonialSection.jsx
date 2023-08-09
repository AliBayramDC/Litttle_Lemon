import React, { useState } from 'react';
import './TestimonialSection.css'; // You can create a CSS file for styling

const testimonialsData = [
  {
    id: 1,
    name: 'Ethan Winters',
    content: '"I had the most delightful dining experience at your restaurant. The food was not only delicious but also beautifully presented. The staff were friendly and attentive, making me feel truly welcomed. I cant wait to come back!',
    image: 'avatar3.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    name: 'Will Smith',
    content: "Your restaurant exceeded my expectations in every way. The ambiance was cozy and inviting, the menu had a great variety of options, and the flavors in each dish were outstanding. It's clear that your team takes pride in delivering an exceptional dining experience.",
    image: 'avatar2.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    name: 'Tracy Winters',
    content: "As a regular customer, I'm consistently impressed by the quality of the food at your restaurant. The ingredients are fresh, and the flavors are rich and authentic. It's my go-to place for a memorable meal with friends and family.",
    image: 'avatar1.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    name: 'Rose Winters',
    content: "I recently celebrated a special occasion at your restaurant, and it was an evening to remember. The staff went above and beyond to create a personalized dining experience, and the attention to detail was remarkable. Thank you for making our celebration unforgettable.",
    image: 'avatar4.jpg', // Replace with the actual image path
  },
  // Add more testimonials here
];


const TestimonialSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonialsData.length
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <div style={{backgroundColor: '#f5f5f5'}} id='testimonials'>
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Testimonials</h2> {/* Add the heading */}
      <div className="testimonial-content">
        <img
          className="testimonial-image"
          src={currentTestimonial.image}
          alt={currentTestimonial.name}
        />
        <p className="testimonial-text">{currentTestimonial.content}</p>
        <p className="testimonial-name">{currentTestimonial.name}</p>
      </div>

      <div className="testimonial-controls">
        <button onClick={handlePrevTestimonial}>Previous</button>
        <button onClick={handleNextTestimonial}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSection;

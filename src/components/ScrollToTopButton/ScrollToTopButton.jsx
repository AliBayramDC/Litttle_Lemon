import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Create a CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the user has scrolled down enough to show the button
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop}>Go to Top</button>
    </div>
  );
};

export default ScrollToTopButton;

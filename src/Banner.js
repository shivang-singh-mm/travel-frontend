// banner.js (React Component)
import React, { useEffect } from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const text = document.querySelector(".banner-text");
      let scrollPosition = window.scrollY;
      
      if (text) {
        text.style.opacity = 1 - scrollPosition / 500;
        text.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="banner" 
      style={{ 
        backgroundImage: "url('https://img.freepik.com/premium-photo/tourist-holding-airplane-flight-travel-passport-traveller-fly-travelling-citizenship-air-blue-sky-background-travel-concept_1028938-107839.jpg')" 
      }}
    >
      <div className="banner-content">
        <h1 className="banner-text">Explore. Dream. Discover.</h1>
        
        <p className="banner-subtext">Unforgettable Journeys Await</p>
        <Link to='/booking'>
        <button className="banner-btn">Plan Your Next Adventure</button></Link>
      </div>
    </div>
  );
};

export default Banner;

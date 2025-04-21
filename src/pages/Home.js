import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import BookingForm from "../Bookyour/Bookingform";
import Carousel from "../Carousel/Carousel";
import Discounts from "../Carousel/Discounts.js";
import Gallery from "../Gallery";
import TestimonialSlider from "../Testing/Testing";
import HolidayOffers from "../HolidayOffers/HolidayOffers.js";
import Advanture from "../Adventure/Advanture.js";
 import CardCarousel from "../CardCarousel/CardCarousel.js";
 import WhyWe from "../WhyWe/WhyWe.js";
import '../pages/Home.css'
 
import Banner from "../Banner";
 
const Home = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="background-image">
        <img
          // src="https://www.nationalunlock.com/wp-content/uploads/2023/07/travel-agency.jpg"
          src="https://www.tripplannersindia.com/assets/blog/images/placestovisitinmanaliinjanuary/Manali.webp"
          alt="Travel Agency"
        />
        <div className="overlay">
          <h1 style={{ fontSize: '50px' }}>Welcome to Angel Destination</h1>
          <Button onClick={scrollToForm} className="explore-btn">
            Book Now Explore Now
          </Button>
        </div>
      </div>

      <div ref={formRef} style={{ backgroundColor: "#029feef9" }}>
        <BookingForm />
      </div>
       
      <Discounts/>
      <Carousel />
      <Banner />
      <div className="Gallery-section">
      <Gallery /></div>    
     <CardCarousel/>
  <div className="footer-banner-a-a">
        <div className="testimonial-container-a">
          <TestimonialSlider />
        </div>
      </div>
        <WhyWe/>
      <div className="holidays-sections">
      <HolidayOffers/>
      </div> 
         <Advanture/>
    </div>
  );
};

export default Home;

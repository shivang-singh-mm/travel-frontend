import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import BookingForm from "../Bookyour/Bookingform";
import Carousel from "../Carousel/Carousel";
import Gallery from "../Gallery";
import TestimonialSlider from "../Testing/Testing";
import '../pages/Home.css'
import { FaCheckCircle } from 'react-icons/fa';
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
          src="https://www.nationalunlock.com/wp-content/uploads/2023/07/travel-agency.jpg"
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

      <Carousel />
      <Banner />
      <Gallery />
      <div className="background-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h2>Why Choose Us?</h2>
              <ul></ul>
              {/* <FaCheckCircle color="green" />  */}
              <p>  <FaCheckCircle color="green" /> 98% Customer Satisfaction</p>
              <p>  <FaCheckCircle color="green" /> 98% Customer Satisfaction</p>
              <p>  <FaCheckCircle color="green" /> 24/7 Customer Support</p>
              <p>  <FaCheckCircle color="green" /> Hassle-Free Booking Process</p>
              <p> <FaCheckCircle color="green" /> Best Price Guarantee</p>


            </div>

            <div className="col-md-4 text-center">
              <h2>Exclusive Destinations</h2>
              <p>We offer exclusive travel packages to the world’s most stunning locations, ensuring a unique and unforgettable experience.</p>
            </div>

            <div className="col-md-4 text-center">
              <h2>Customer Benefits</h2>
              <p>Enjoy hassle-free travel, personalized services, and unbeatable prices, making your journey smooth and enjoyable.</p>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>


      <div className="footer-banner-a">
        <div className="testimonial-container">
          <TestimonialSlider />
        </div>
      </div>

      <div className="footer-banner" style={{
        backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5612AQExzivEqtqHSg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1709635403769?e=2147483647&v=beta&t=kPvRoXfejT5P2CHQxqz-u0UqrOAoxymCbi9ZssxuyiQ')"
      }
      }
      >
        <section className="footer-promo">
          <div className="container text-center">
            <h2 className="promo-title">Your Next Adventure Awaits! ✈️</h2>
            <p className="promo-text">
              Embark on a journey filled with breathtaking landscapes, rich cultures, and unforgettable experiences. Whether you're dreaming of a tropical beach escape, an adventurous mountain trek, or a vibrant city tour, we have the perfect destination for you.
              <br />Our expertly curated travel packages ensure a hassle-free experience, tailored to your preferences and budget. <br />
              {/* <ul className="promo-text">
                <li className="promo-text">At Traveller,we believe that travel is more than just a destination —it's an experience</li>
                <li className="promo-text">Dreaming of breathtaking mountains,beaches,or cityscapes, we've got you covered.</li>

              </ul> */}
            </p>
          </div>
        </section>

      </div>



    </div>
  );
};

export default Home;

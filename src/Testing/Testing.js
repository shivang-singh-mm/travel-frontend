import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialSlider.css';
import { FaStar, FaStarHalfAlt, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';




const renderStars = (rating) => {
  return (
    <>
      {[...Array(rating)].map((_, index) => (
        <FaStar key={index} color="#fbc531" />
      ))}
    </>
  );
};

function TestimonialSlider() {


  const [testimonials, setTestimonials] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL

  async function fetchTestimonials() {
    const fetchTestimonialsRes = await axios.get(`${baseurl}/api/review/`);
    setTestimonials(fetchTestimonialsRes.data);
  }

  useEffect(() => {
    fetchTestimonials();
  }, [])

  return (
    <div className="testimonial-section container">
      <div className="row">

        {/* Testimonial Carousel */}
        <div className="col-lg-12 col-md-12 d-flex justify-content-center">
          <div className="testimonial-container">
            <h1 className="tittle-a">Our Happy Travellers</h1>
            <Carousel interval={3000} indicators={false} className="w-auto">
              {testimonials?.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-card">
                    <div>
                      <img
                        src={item?.url}
                        alt={item?.name}
                        className="rounded-circle shadow-lg"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5 className="mt-3 mb-1">{item?.name}</h5>
                    <small className="text-muted">{item?.occupation}</small>
                    <p className="text-center mt-3">{item?.review}</p>
                    <div className="stars mt-2">{renderStars(item?.star_number)}</div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

          </div>
        </div>




      </div>
    </div>
  );
}

export default TestimonialSlider;

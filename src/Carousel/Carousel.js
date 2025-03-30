import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import axios from "axios";
import { FaCar, FaHotel, FaUtensils } from "react-icons/fa"; // Importing icons

const CardSlider = () => {
  const [cardsData, setCardsData] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL;

  async function fetchPopularPackages() {
    try {
      const fetchRes = await axios.get(`${baseurl}/api/tour/`);
      setCardsData(fetchRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchPopularPackages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <div className="slider-container-a">
      <h1 className="title-a" style={{ color: "#005aa7" }}>Our Popular Packages</h1>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card.id} className="card-a">
            <div className="card-image-a">
              <img src={card.cover_url} alt={card.city} />
            </div>
            <div className="card-content-a">
              <h3>{card.city}</h3>
              <p> <FaCar /> Car Rentals <FaHotel /> Hotel Facilities <FaUtensils /> Food</p>
             
              
              
              <button className="view-more-a">View More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;

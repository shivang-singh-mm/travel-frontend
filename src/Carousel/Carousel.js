import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import axios from "axios";
import { FaCar, FaHotel, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    dots: false,
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
      <h1 className="title-a" style={{ color: "#005aa7", textAlign: 'center', alignItems: 'center' }}>Our Popular Packages</h1>
      <p className="text-justify-center">Our popular travel packages are thoughtfully curated to bring you the most exciting, relaxing, and culturally rich experiences across the globe.Each package is designed to include top-rated accommodations, seamless transfers, guided tours, and must-visit attractions </p>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card._id} className="card-a">
            <div className="card-image-a">
              <img src={card?.image1} alt={card.title1} />
            </div>
            <div className="card-content-a">
              <h3><strong>{card.title1}</strong></h3>
              <p className="p-card-destination">
                <strong className="stro-dest">Destinations covered:</strong> {card.placesCovered}</p>
              <p><FaCar /> Car   <FaHotel /> Hotel <FaUtensils /> Food </p>
              <p>{card.form4Items[0]?.input1}</p>
              <Link to={`/package/${card.title1}/${card._id}`}><button className="view-more-a">View More</button></Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;

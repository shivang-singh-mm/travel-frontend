import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"; // Import custom styles
import axios from "axios";

const Gallery = () => {
  const [cards, setCards] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL

  async function fetchDestinations() {
    const fetchPopularDestinations = await axios.get(`${baseurl}/api/gallery/`);
    setCards(fetchPopularDestinations.data);
  }

  useEffect(() => {
    fetchDestinations();
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1 className="tittle-a">Gallery</h1>
      <p style={{ textAlign: 'center' }}>Our popular destinations offer something for every kind of traveler. Whether you're planning a romantic getaway, an adventure trip, or a family vacation, these destinations promise unforgettable experiences, scenic views, and cherished memories.</p>
      <Slider {...settings}>
        {cards?.map((card) => (
          <div key={card.id} className="carousel-card">
            <div className="carousel-image">
              <img src={card.image_url} alt={card.title} />
              <div className="carousel-overlay">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
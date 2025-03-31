import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiscountCarousel.css";
import { FaCar, FaHotel, FaUtensils } from "react-icons/fa";  

const DiscountCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Cards Data with Images
  const discountCards = [
    {
      title: " Festive Hotel Stays",
      desc: "Enjoy up to 40% off on luxurious hotels during Navratri! Stay close to Garba events & temples.",
      
      img: "https://image.cnbcfm.com/api/v1/image/107336102-1700284880470-gettyimages-663507425-56856f99-83eb-4196-8dfe-1b8d4b14bb77.jpeg?v=1700285095",
    },
    {
      title: "Discounted Cabs & Rentals",
      desc: "Book a cab & travel hassle-free! Special discounted rides for Navratri festival-goers.",
      
      img: "https://www.swantour.com/sites/default/files/inline-images/top-india-tour_0.jpg",
    },
    {
      title: " Delicious Festive Cuisine",
      desc: "Savor the authentic Navratri flavors with exclusive food offers on Sattvic meals & snacks.",
      
      img: "https://www.indiatraveltours.com/images/golden-triangle-delhi-agra-jaipur-tour.jpg",
    },
  ];

  return (
    <div className="slider-container" style={{ width: "90%", margin: "0 auto", padding: "20px 0" }}>
      <Slider {...settings}>
        {discountCards.map((card, index) => (
          <div key={index} className="discount-card" style={{
            background: "#fff",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            minHeight: "350px",
            overflow: "hidden",
          }}>
            {/* Card Image */}
            <img src={card.img} alt={card.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />

            {/* Card Content */}
            <div style={{ padding: "15px" }}>
              <div>{card.icon}</div>
              <h3 style={{ color: "#005aa7", marginTop: "10px", fontSize: "18px" }}>{card.title}</h3>
              <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.4" }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DiscountCarousel;

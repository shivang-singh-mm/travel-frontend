import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiscountCarousel.css";
import { FaCar, FaHotel, FaUtensils } from "react-icons/fa";

const DiscountCarousel = ({ url1, url2, url3, description1, description2, description3, title1, title2, title3 }) => {


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
      title: title1,
      desc: description1,

      img: url1,
    },
    {
      title: title2,
      desc: description2,

      img: url2,
    },
    {
      title: title3,
      desc: description3,

      img: url3,
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

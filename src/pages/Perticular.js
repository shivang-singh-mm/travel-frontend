import React, { useEffect, useState } from "react";
import "./Perticular.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bookingform from "../Bookyour/Bookingform";

function Perticular() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tourPackage, setPackage] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { _id: id } = useParams();
  const baseurl = process.env.REACT_APP_API_URL;

  async function fetchPackage() {
    try {
      const fetchEnquiryRes = await axios.get(`${baseurl}/api/tour/${id}`);
      setPackage(fetchEnquiryRes.data);
      console.log(fetchEnquiryRes);
    } catch (error) {
      console.error("Failed to fetch tour package:", error);
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  }

  useEffect(() => {
    fetchPackage();
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="loading-text">Loading your tour...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="perticular-background"
        style={{
          backgroundImage: `url(${tourPackage.image1})`,
        }}
      >
        <h3 className="fade-in">{tourPackage.title2}</h3>
      </div>

      <div className="container fade-in">
        {/* Main Details */}
        <div className="row">
          {/* Left Content */}
          <div className="col-md-8">
            <div className="section-card fade-in">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={1900} // slides every 3 seconds
                arrows={true}
                className="card-image-wrapper"
              >
                {tourPackage.images?.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                ))}
              </Slider>

              <h5 className="text-primary fw-bold my-3">📍 Places Covered:</h5>
              <p>{tourPackage.placesCovered}</p>

              <h5 className="text-primary fw-bold mt-4">🎯 Special Attentions</h5>
              <ul className="list-unstyled">
                {tourPackage?.specialAttentionList?.map((activity, index) => (
                  <li key={index}>» {activity}</li>
                ))}
              </ul>

              <h5 className="text-primary fw-bold mt-4">✅ Inclusions</h5>
              <ul className="list-unstyled">
                {tourPackage?.inclusionList?.map((activity, index) => (
                  <li key={index}>✔️ {activity}</li>
                ))}
              </ul>

              <div className="tip-box">
                💡 <strong>Travel Tip:</strong> {tourPackage.travelTip}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">

            <div className="section-card package-box">
              <p className="fw-bold text-primary">🕒 Duration:</p>
              <p>&nbsp;{tourPackage?.form4Items?.[0]?.input1}</p>

              <p className="fw-bold text-primary mt-4">💰 Package Cost:</p>
              <p className="text-danger mb-1">
                &nbsp; Starting From: ₹ {tourPackage?.form4Items?.[0]?.input2}
                <br />
                {/* <strong>On Request</strong> */}
              </p>
              <p style={{ fontSize: "0.9rem" }}>
                <em>(Customized cost as per your preferences is available as well)</em>
              </p>
            </div>

            {/* New Box Below Duration */}
            <div className="section-card important-info-box mt-4">
              <p className="fw-bold text-primary">ℹ️ Description:</p>
              <ul className="list-unstyled">
                {tourPackage?.description2}
              </ul>
            </div>

            <Link to='/booking'>
              <button className="banner-btn" style={{ backgroundColor: '#3977ac' }} >Plan Your Next Adventure</button></Link>
          </div>



        </div>
      </div>

      <div className="itinerary-container fade-in">
        <h2 className="itinerary-title">📅 DAYWISE TOUR <span className="text-danger">ITINERARY</span></h2>

        {tourPackage.itineraryItems?.map((item, index) => (
          <div key={index} className="itinerary-item">
            <div
              className={`itinerary-header ${index === activeIndex ? "open" : ""}`}
              onClick={() => toggleIndex(index)}
            >
              <strong>{item.title}</strong>
              <span className="toggle-icon">{index === activeIndex ? "➖" : "➕"}</span>
            </div>
            {index === activeIndex && (
              <div className="itinerary-content">
                <p>{item.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
     <Bookingform/>

    </div>
  );
}

export default Perticular;

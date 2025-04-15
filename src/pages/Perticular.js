import React, { useState } from "react";
import "./Perticular.css";
// import { Carousel } from "react-bootstrap";



const itineraryData = [
    {
      day: "Day 1: Arrival at Udaipur",
      content: `Udaipur, known as the 'Venice of the East', offers a captivating experience for both the eyes and the mind. Its charming manmade lakes, magnificent palaces that reflect the city's royal history, and lush greenery create a serene atmosphere that connects you with the beauty of nature...`,
    },
    {
      day: "Day 2: Udaipur Sightseeing",
      content: `Sightseeing in Udaipur including City Palace, Jagdish Temple, and Lake Pichola boat ride.`,
    },
    {
      day: "Day 3: Drive to Mount Abu (3 Hours, 160 kms approx.)",
      content: `Drive to Mount Abu. En route enjoy scenic views. Check-in and leisure time.`,
    },
    {
      day: "Day 4: Mount Abu–Jodhpur (4 Hours, 260 kms approx.)",
      content: `After Mount Abu sightseeing, proceed to Jodhpur and explore local markets.`,
    },
    {
      day: "Day 5: Jodhpur Sightseeing",
      content: `Visit Mehrangarh Fort, Jaswant Thada, and clock tower market.`,
    },
  ];
function Perticular() {

  
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleIndex = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="perticular-background">
        <h3>6 Days Rajasthan Tour Package Udaipur–Mountabu–Jodhpur</h3>
      </div>

      <div className="container">
       

        {/* Main Details */}
        <div className="row">
          {/* Left Content */}
          <div className="col-md-8">
            
            <div className="section-card">
                <div  className="card-image-wrapper"> 
            <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/rajasthan-thar-desert-jaiselmer.jpg" alt="" /> </div>
              <h5 className="text-primary fw-bold my-3">📍 Places Covered:</h5>
              <p>Udaipur » Mountabu » Jodhpur</p>

              <h5 className="text-primary fw-bold mt-4">🎯 Special Attentions</h5>
              <ul className="list-unstyled">
                <li>» Cultural Dance Show at Bagore Ki Haveli</li>
                <li>» City Palace, Jagdish Temple & Saheliyon Ki Bari</li>
                <li>» Evening boat ride on Lake Pichola</li>
                <li>» Mehrangarh Fort & Jaswant Thada visit</li>
              </ul>

              <h5 className="text-primary fw-bold mt-4">✅ Inclusions</h5>
              <ul>
                <li>✔️ Accommodation in heritage hotels</li>
                <li>✔️ Daily breakfast & dinner</li>
                <li>✔️ AC private car with driver</li>
                <li>✔️ Sightseeing tours with local guides</li>
              </ul>

              <div className="tip-box">
                💡 <strong>Travel Tip:</strong> Visit between Oct–Mar for perfect weather and vibrant festivals!
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">
            <div className="section-card package-box">
              <p className="fw-bold text-primary">🕒 Duration:</p>
              <p className="text-danger">5 Nights / 6 Days</p>

              <p className="fw-bold text-primary mt-4">💰 Package Cost:</p>
              <p className="text-danger mb-1">
                Starting From: ₹ <strong>On Request</strong>
              </p>
              <p style={{ fontSize: "0.9rem" }}>
                <em>(Customize this tour as per your preferences)</em>
              </p>
            </div>
          </div>
        </div>
      </div>
   

      <div className="itinerary-container">
      <h2 className="itinerary-title">📅 DAYWISE TOUR <span className="text-danger">ITINERARY</span></h2>

      {itineraryData.map((item, index) => (
        <div key={index} className="itinerary-item">
          <div
            className={`itinerary-header ${index === activeIndex ? "open" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            <strong>{item.day}</strong>
            <span className="toggle-icon">{index === activeIndex ? "➖" : "➕"}</span>
          </div>
          {index === activeIndex && (
            <div className="itinerary-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>

   {/* <Carousel/> */}
    {/* <Carousel /> */}
    </div>
  );
}

export default Perticular;

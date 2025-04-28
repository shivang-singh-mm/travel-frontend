import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Cities.css";
import axios from "axios";

const tourPackages = [
  {
    id: 1,
    title: "6 DAYS RAJASTHAN TOUR PACKAGE UDAIPUR–MOUNTABU–JODHPUR",
    places: "Udaipur » Mountabu » Jodhpur",
    nights: 6,
    days: 6,
    discount: "25%",
    image:
      "https://rtdc.tourism.rajasthan.gov.in/img/PackageBanner/Exotic%20Rajasthan/img1.jpg",
    onRequest: true,
  },
  {
    id: 2,
    title: "JAIPUR TOUR PACKAGE 2 NIGHTS 3 DAYS",
    places: "Jaipur",
    nights: 2,
    days: 3,
    discount: "30%",
    image:
      "https://www.rentaltempotravellers.com/wp-content/uploads/2023/06/Rajasthan-Tourism.webp",
    onRequest: true,
  },
];

function Cities() {

  const [theme, setThemes] = useState([]);

  const { _id: _id } = useParams();

  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchThemes() {
      try {
        const response = await axios.get(`${baseurl}/api/theme/${_id}`);
        setThemes(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    }
    fetchThemes();
  }, []);

  return (
    <div className="cities-wrapper">
      <div
        style={{
          backgroundImage: `url(${theme.image_url})`,
        }}
        className="tour-background-ra p-4 text-white text-center">
        <h2>{theme.title}</h2>
      </div>

      <div className="container my-4">
        <h3 className="mb-3">
          Plan Your Next Tour With Our Experienced Trip Advisors
        </h3>
        <p className="text-justify">
          {theme.description?.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div className="row">
          {theme?.package_ids?.map((pkg) => (
            <div className="col-12 mb-4" key={pkg._id}>
              {/* Make the whole card clickable */}
              <Link to={`/package/${pkg.title1}/${pkg._id}`} className="text-decoration-none text-dark">
                <div className="card shadow">
                  <div className="row g-0 flex-column flex-md-row">
                    {/* Image */}
                    <div className="col-12 col-md-4 position-relative">
                      <img
                        src={pkg.image1}
                        className="card-img-top"
                        alt={pkg.title1}
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                      {/* <div className="discount-label">{pkg.discount} OFF</div> */}
                      <button className="on-request-btn">₹ On Request</button>
                    </div>

                    {/* Content */}
                    <div className="col-12 col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-primary">{pkg.title1}</h5>
                        <p className="text-muted">
                          <strong>📍 Places Covered</strong>
                          <br />
                          {pkg.placesCovered}
                        </p>
                        <div className="d-flex justify-content-between my-2 flex-wrap">
                          <div className="feature-box">🏨 Accommodation</div>
                          <div className="feature-box">🍽️ Food</div>
                          <div className="feature-box">🚗 Car Rental</div>
                          <div className="feature-box">🚴‍♂️ Sightseeing</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                          <div className="duration">
                            📞 {pkg?.form4Items[0]?.input1}
                          </div>
                          <button className="btn btn-danger px-4">
                            VIEW DETAILS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;

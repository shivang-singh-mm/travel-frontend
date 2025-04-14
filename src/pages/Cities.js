import React from "react";
import "./Cities.css";

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
  return (
    <div className="cities-wrapper">
      <div className="tour-background-ra p-4 text-white text-center">
        <h2>Rajasthan Tour Packages</h2>
      </div>

      <div className="container my-4">
        <h3 className="mb-3">Plan Your Rajasthan Tour With Our Experienced Trip Advisors</h3>
        <p className="text-justify">
          Architectural wonders, exquisite handicrafts, colourful culture, and
          tempting cuisine are a few of the many highlights of this magnificent
          state. Set amidst a vast desert, the magical land of Rajasthan is
          synonymous with romance and chivalry. As one of the best travel
          agencies in India, we at JoyPlus Holidays take immense pride in
          helping you explore royalty like never before.
        </p>
        <p className="text-justify">
          With our Rajasthan tour packages, travel back in time and experience
          the era of royal reign. A complete Rajasthan package includes
          luxurious palaces, vintage cars, camel safaris in golden sand dunes,
          shopping in Jaipur bazaars, and tiger safaris in the wild forests.
        </p>
        <p className="text-justify">
          Enjoy folk music, dances, puppet shows, magnificent forts, temples,
          and the opulent Rajput culture.
        </p>

        <div className="row">
          {tourPackages.map((pkg) => (
            <div className="col-12 mb-4" key={pkg.id}>
              <div className="card shadow">
                <div className="row g-0 flex-column flex-md-row">
                  {/* Image */}
                  <div className="col-12 col-md-4 position-relative">
                    <img
                      src={pkg.image}
                      className="card-img-top"
                      alt={pkg.title}
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                    <div className="discount-label">{pkg.discount} OFF</div>
                    <button className="on-request-btn">₹ On Request</button>
                  </div>

                  {/* Content */}
                  <div className="col-12 col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-primary">{pkg.title}</h5>
                      <p className="text-muted">
                        <strong>📍 Places Covered</strong>
                        <br />
                        {pkg.places}
                      </p>
                      <div className="d-flex justify-content-between my-3 flex-wrap">
                        <div className="feature-box">🏨 Accommodation</div>
                        <div className="feature-box">🍽️ Food</div>
                        <div className="feature-box">🚗 Car Rental</div>
                        <div className="feature-box">🚴‍♂️ Sightseeing</div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div className="duration">
                          📞 {pkg.nights} Nights/{pkg.days} Days
                        </div>
                        <button className="btn btn-danger px-4">
                          VIEW DETAILS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./TourPage.css";
import axios from "axios";

const commonImage =
  "https://www.holidify.com/images/bgImages/RAJASTHAN.jpg"; // Common image for all cards

const CityTour = () => {
  const [city, setCity] = useState('');


  const baseurl = process.env.REACT_APP_API_URL

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  async function fetchCity() {
    const fetchCityRes = await axios.get(`${baseurl}/api/tour/${id}`);
    console.log(fetchCityRes.data)
    setCity(fetchCityRes.data);
  }

  useEffect(() => {
    fetchCity()
  }, [location.search])

  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
    >
      {/* Hero Section */}
      <motion.div className="tour-hero">
        <h1 className="tour-title">{city.city} Tour Packages</h1>
        <motion.img
          src={city?.cover_url}
          alt={city?.city}
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        {city?.description}
      </motion.p>

      {/* Three Cards with One Common Image */}
      <Container className="tour-info-cards">
        <Row className="g-4">
          {/* Destination Card */}
          <Col md={4}>
            <Card className="tour-card">
              <Card.Img variant="top" src={city?.destination_url} alt="Rajasthan View" className="tour-card-img" />
              <Card.Body>
                <Card.Title>📍 Destinations Covered</Card.Title>
                <Card.Text>
                  {city?.destinations_covered}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Hotel Facilities Card */}
          <Col md={4}>
            <Card className="tour-card">
              <Card.Img variant="top" src={city?.hotel_url} alt="Rajasthan View" className="tour-card-img" />
              <Card.Body>
                <Card.Title>🏨 Hotel Facilities</Card.Title>
                {city?.hotel_facilities}
              </Card.Body>
            </Card>
          </Col>

          {/* Tour Duration Card */}
          <Col md={4}>
            <Card className="tour-card">
              <Card.Img variant="top" src={city?.cab_url} alt="Rajasthan View" className="tour-card-img" />
              <Card.Body>
                <Card.Title>🚗 Cabs Available</Card.Title>
                <Card.Text>
                  🏕️ {city?.cab_available} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section */}
      <div className="pricing-card-wrapper">
        <Card className="pricing-card">
          <Card.Body>
            <Card.Title className="section-heading">Pricing</Card.Title>
            <Card.Text className="pricing-text">
              <strong>{city?.pricing}</strong>
            </Card.Text>
            <Card.Text className="pricing-text">
              {city?.included}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* Booking Button */}
      <div className="booking-button-wrapper">
        <Link to="/booking">
          <Button className="book-now">Book Now</Button>
        </Link>
      </div>

    </motion.div>
  );
};

export default CityTour;

import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const SameDayTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="tour-hero">
        <h1 className="tour-title">Same Day Tour Packages</h1>
        <motion.img
          src="https://www.amsahtours.com/images/same-day-tours.jpg"
          alt="Same Day Tour"
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        Experience the best of India in just one day! Choose from exciting trips
        like Delhi City Tour, Agra Taj Mahal Trip, Jaipur Heritage Tour, and
        more.
      </motion.p>

      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[{
                  day: "Delhi Tour",
                  title: "Explore the Capital",
                  desc: "Visit India Gate, Red Fort, Lotus Temple, and more."
                },
                {
                  day: "Agra Tour",
                  title: "Taj Mahal & Agra Fort",
                  desc: "See the iconic Taj Mahal and Agra Fort in a single day."
                },
                {
                  day: "Jaipur Tour",
                  title: "The Pink City",
                  desc: "Visit Amber Fort, Hawa Mahal, and the City Palace."
                }].map((trip, index) => (
                  <Col md={6} lg={4} key={index} className="mb-4">
                    <Card className="inner-card">
                      <Card.Body>
                        <Card.Title className="card-title">
                          {trip.day}: {trip.title}
                        </Card.Title>
                        <Card.Text className="card-text">{trip.desc}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>

      <div className="pricing-card-wrapper">
        <Card className="pricing-card">
          <Card.Body>
            <Card.Title className="section-heading">Pricing</Card.Title>
            <Card.Text className="pricing-text">
              <strong>Starting at ₹4,999</strong> per person
            </Card.Text>
            <Card.Text className="pricing-text">
              Includes guided tour, transport, and meals.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="booking-button-wrapper">
        <Link to="/booking">
          <Button className="book-now">Book Now</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SameDayTour;

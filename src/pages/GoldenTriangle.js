import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const GoldenTriangle = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="tour-hero">
        <h1 className="tour-title">Golden Triangle Tour Packages</h1>
        <motion.img
          src="https://www.rajasthanbhumitours.com/images/Golden-Triangle-Tour-Package.jpg"
          alt="Golden Triangle Tour"
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        Experience the iconic Golden Triangle, covering Delhi, Agra, and Jaipur. Witness the cultural heritage, stunning monuments, and vibrant markets of India’s most famous tourist circuit.
      </motion.p>

      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[
                  { day: 1, title: "Delhi Arrival", desc: "Explore India Gate, Red Fort & Jama Masjid." },
                  { day: 2, title: "Agra", desc: "Visit Taj Mahal & Agra Fort." },
                  { day: 3, title: "Jaipur", desc: "Explore Amber Fort, Hawa Mahal & City Palace." },
                  { day: 4, title: "Delhi Return", desc: "Shopping & local sightseeing before departure." }
                ].map((day, index) => (
                  <Col md={6} lg={4} key={index} className="mb-4">
                    <Card className="inner-card">
                      <Card.Body>
                        <Card.Title className="card-title">Day {day.day}: {day.title}</Card.Title>
                        <Card.Text className="card-text">{day.desc}</Card.Text>
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
              <strong>Starting at ₹15,999</strong> per person
            </Card.Text>
            <Card.Text className="pricing-text">
              Includes hotel, meals, transport, and sightseeing.
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

export default GoldenTriangle;

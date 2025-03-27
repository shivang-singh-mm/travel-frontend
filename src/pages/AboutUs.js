import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="hero_section">
      {/* Hero Section */}
      <div className="about-hero">
        <motion.div 
          className="about-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="hero-title">Discover the World with Us</h1>
          <p className="hero-subtitle">Your adventure begins here</p>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <Container className="about-section">
        <Row className="align-items-center">
          <Col md={6}>
            <motion.img
              src="https://cdn-bpaab.nitrocdn.com/ovmYDbOhMgMfItYufwmmRlRlkhckslfH/assets/images/optimized/rev-8763df0/djangostars.com/blog/wp-content/uploads/2021/12/Travel-as-a-service.jpg"
              alt="Our Journey"
              className="about-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </Col>
          <Col md={6}>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Our Story
            </motion.h2>
            <p className="about-text">
              Traveller was founded in 2010 with a mission to help people explore the world 
              in an exciting and comfortable way. From solo travelers to family vacations, 
              we have curated thousands of trips that leave unforgettable memories.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="about-section">
        <h2 className="section-title text-center">Why Choose Us?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index} className="feature-box">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="feature-card">
                  <Card.Img variant="top" src={feature.image} className="feature-img" />
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Meet Our Team Section */}
      <Container className="team-section">
        <h2 className="section-title text-center">Meet Our Travel Experts</h2>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={4} sm={6} key={index}>
              <motion.div
                className="team-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <Card.Img variant="top" src={member.image} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// Features Data
const features = [
  {
    title: "Personalized Itineraries",
    description: "Customized trips tailored to your needs and preferences.",
    image: "https://www.travelandtourworld.com/wp-content/uploads/2024/05/Digital-Channels-Technology.jpg",
  },
  {
    title: "24/7 Customer Support",
    description: "We are here to assist you anytime, anywhere in the world.",
    image: "https://jobsdone.ph/wp-content/uploads/2020/08/Untitled-design-1-1.png",
  },
  {
    title: "Affordable Luxury",
    description: "Enjoy premium travel experiences without breaking the bank.",
    image: "https://www.timeoutsharjah.com/cloud/timeoutsharjah/2022/06/11/luxury-train-rides.jpg",
  },
];

// Team Data
const teamMembers = [
  {
    name: "Alex Carter",
    role: "Senior Travel Consultant",
    image:
      "https://www.kilroy.co.uk/media/m35nwbxs/img_0110.jpeg?width=1900&height=950&rmode=crop&quality=70&rxy=0.5,0.5",
  },
  {
    name: "Sophie Miller",
    role: "Luxury Travel Expert",
    image:
      "https://www.emeraldcruises.eu/-/media/project/scenic/emerald-cruises/travel-agent-hub/ours-sales-team/d_ecer-two_guests_with_cruise_director.jpg?rev=4ac6a19446404789bded0ad61fa64f98",
  },
  {
    name: "James Brown",
    role: "Adventure Specialist",
    image:
      "https://www.emeraldcruises.co.uk/-/media/project/scenic/emerald-cruises/travel-agent-hub/events/uk-trade-events/d_trade_william-young.jpg?rev=30e9cb7023af410aad98011716c55387",
  },
];

export default AboutUs;

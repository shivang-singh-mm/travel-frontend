import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./AboutUs.css";
import HolidayOffers from "../HolidayOffers/HolidayOffers";
import WhyWe from "../WhyWe/WhyWe";



const images = ["/aboutus.jpg"];
const images2 = ["/aboutus2.jpg"];
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
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Folder ${index}`} width={400} className="about-image" />
            ))}

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
              <strong>Explore India with the Best Travel Services:</strong> <br></br>

              Discover seamless travel experiences with Angel Destination, offering 600+ all-inclusive cars, 500+ premium hotels, and expert local tour guides tailored to each destination. Whether you're planning a luxury escape, an adventure tour, or a business trip, we ensure comfort, safety, and hassle-free bookings. Our handpicked guides provide deep insights, making every journey memorable. Experience personalized itineraries, 24/7 support, and unbeatable prices across India. Book with us and turn your travel dreams into reality!
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}

      <div className="about-xyz">
        <Container className="about-section">
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <p>At Angel Destination, we believe that travel is more than just a journey—it's about creating unforgettable memories. Here's why thousands of travelers trust us:</p>
          <Row>
            {features.map((feature, index) => (
              <Col md={4} key={index} className="feature-box-xyz">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card className="feature-card-xyz">
                    <Card.Img variant="top" src={feature.image} className="feature-img-xyz" />
                    <Card.Body>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container></div>

      {/* Meet Our Team Section */}
      <Container className="team-section">
        <h2 className="section-title text-center">Meet Our Travel Experts</h2>
        <p>Our team of passionate travel experts is the heart of everything we do. With years of experience, insider knowledge, and a deep love for exploring the world, they’re here to craft the perfect trip just for you.</p>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={6} sm={12} key={index}>
              <motion.div
                className="team-card mb-4"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-3">
                  <Row className="align-items-center">
                    <Col md={5} xs={12} className="text-center">
                      <img
                        src={images2[index % images2.length]}
                        alt={`Member ${index}`}
                        className="img-fluid rounded about-image"
                      />
                    </Col>
                    <Col md={7} xs={12}>
                      <Card.Body>
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text className="about-saumya">{member.role}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="holidays-sections">
        <HolidayOffers /></div>
      <WhyWe />
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
    name: "Shivam Pundheer",
    role: "Shivam Pundheer is a seasoned tourism professional with over five years of experience in organizing and managing travel services across India. His expertise lies in curating personalized itineraries, ensuring seamless experiences, and prioritizing safety and security, especially in adventure tourism.He skillfully integrates technology to enhance travel experiences. His deep understanding of client needs, along with his commitment to providing top-notch service, makes him a trusted name in the industry.Travel Consultant",
    image:
      "https://www.kilroy.co.uk/media/m35nwbxs/img_0110.jpeg?width=1900&height=950&rmode=crop&quality=70&rxy=0.5,0.5",
  },
  {
    name: "Mr. Mohit",
    role: "With 16 years of experience in the travel industry, Mr. Mohit has successfully served 3,000+ customers, providing top-notch service and expert guidance while catering to their every need. A Master’s graduate from Agra University, he has worked with two reputed organizations, where he not only proved his expertise but also contributed to their 200% growth. His deep industry knowledge, customer-first approach, and commitment to excellence make him a trusted name in travel and tourism.",
    image:
      "https://www.emeraldcruises.eu/-/media/project/scenic/emerald-cruises/travel-agent-hub/ours-sales-team/d_ecer-two_guests_with_cruise_director.jpg?rev=4ac6a19446404789bded0ad61fa64f98",
  },


];

export default AboutUs;

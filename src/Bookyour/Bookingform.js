import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Bookingform.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    destination: "",
    phoneNumber: "",
    numOfPersons: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-backend.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          destination: "",
          phoneNumber: "",
          numOfPersons: "",
          date: "",
        });
      } else {
        alert("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="booking-form text-center py-5">
      <h2 className="book-trip">📋 BOOK YOUR TRIP NOW</h2>
      <div className="form-container mx-auto shadow-lg">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6} sm={12} className="mb-3">
              <Form.Control
                type="text"
                name="fullName"
                placeholder="✏️ Full Name"
                className="input-field"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6} sm={12} className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="📧 Email Address"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4} sm={12}>
              <Form.Control
                type="text"
                name="destination"
                placeholder="📍 Destination"
                className="input-field"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={4} sm={6}>
              <Form.Control
                type="text"
                name="phoneNumber"
                placeholder="📞 Phone Number"
                className="input-field"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={4} sm={6}>
              <Form.Control
                type="number"
                name="numOfPersons"
                placeholder="👨‍👩‍👧‍👦 No. of Persons"
                className="input-field"
                value={formData.numOfPersons}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6} sm={12}>
              <Form.Control
                type="date"
                name="date"
                className="input-field"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6} sm={12}>
              <Button type="submit" variant="success" className="send-btn w-100 animate-btn">
                ✈️ SEND ENQUIRY →
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default BookingForm;


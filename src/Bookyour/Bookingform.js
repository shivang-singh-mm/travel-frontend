import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Bookingform.css";
import axios from "axios";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    number: "",
    number_of_persons: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const baseurl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const finalData = { ...formData };
      await axios.post(`${baseurl}/api/enquiry`, finalData);
      alert('Enquiry sent successfully!');
      setFormData({ name: '', email: '', number: '', destination: '', date: '', number_of_persons: '' });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
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
                name="name"
                placeholder="✏️ Full Name"
                className="input-field"
                value={formData.name}
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
                name="number"
                placeholder="📞 Phone Number"
                className="input-field"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={4} sm={6}>
              <Form.Control
                type="number"
                name="number_of_persons"
                placeholder="👨‍👩‍👧‍👦 No. of Persons"
                className="input-field"
                value={formData.number_of_persons}
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


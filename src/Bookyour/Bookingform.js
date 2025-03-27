import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Bookingform.css';

function BookingForm() {
  return (
    <div className="booking-form text-center py-5">
      <h2 className="book-trip">📋 BOOK YOUR TRIP NOW</h2>
      <div className="form-container mx-auto shadow-lg">
        <Form>
          <Row className="mb-3">
            <Col md={6} sm={12} className="mb-3">
              <Form.Control type="text" placeholder="✏️ Full Name" className="input-field" />
            </Col>
            <Col md={6} sm={12} className="mb-3">
              <Form.Control type="email" placeholder="📧 Email Address" className="input-field" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4} sm={12}>
              <Form.Control type="text" placeholder="📍 Destination" className="input-field" />
            </Col>
            <Col md={4} sm={6}>
              <Form.Control type="text" placeholder="📞 Phone Number" className="input-field" />
            </Col>
            <Col md={4} sm={6}>
              <Form.Control type="number" placeholder="👨‍👩‍👧‍👦 No. of Persons" className="input-field" />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6} sm={12}>
              <Form.Control type="date" className="input-field" />
            </Col>
            <Col md={6} sm={12}>
              <Button variant="success" className="send-btn w-100 animate-btn">
                ✈️ SEND ENQUIRY →
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;

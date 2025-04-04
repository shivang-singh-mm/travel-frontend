import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button } from 'react-bootstrap';
import './Book.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    destination: '',
    date: '',
    childs: '',
    adults: ''
  });

  const navigate = useNavigate();

  const baseurl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const finalData = { ...formData };
      await axios.post(`${baseurl}/api/enquiry`, finalData);
      alert('Enquiry sent successfully!');
      setFormData({ name: '', email: '', number: '', destination: '', date: '', childs: '', adults: '' });
      navigate('/');
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <motion.div
      className="booking-page1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="booking-title1">Book Your Trip</h1>
      <Form className="booking-form1" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Number</Form.Label>
          <Form.Control type="text" name="number" onChange={handleChange} required />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Childs</Form.Label>
          <Form.Control as="select" name="childs" onChange={handleChange} required>
            <option value="">...select</option>
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Adults</Form.Label>
          <Form.Control as="select" name="adults" onChange={handleChange} required>
            <option value="">...select</option>
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Select Tour Package</Form.Label>
          <Form.Control type="destination" name="destination" onChange={handleChange} required />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Travel Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleChange} required />
        </Form.Group>
        <br />
        <br />
        <Button className="submit-btn1" type="submit">Submit Booking</Button>
      </Form>
    </motion.div>
  );
};

export default Book;

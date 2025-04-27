import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Book.css';

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
      toast.success('Booking submitted successfully!', { autoClose: 3000 });
      setFormData({
        name: '',
        email: '',
        number: '',
        destination: '',
        date: '',
        childs: '',
        adults: ''
      });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Failed to submit booking. Please try again later.', { autoClose: 3000 });
    }
  };

  return (
    <motion.div
      className="booking-page1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overlay-oo"></div>
      <h1 className="booking-title1">Book Your Trip</h1>
      <Form className="booking-form1" onSubmit={handleSubmit}>
        {['name', 'email', 'number', 'destination', 'date'].map((field) => (
          <Form.Group key={field} className="form-group1">
            <Form.Label className="form-label1">{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            <Form.Control
              type={field === 'email' ? 'email' : field === 'date' ? 'date' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}
        <Form.Group className="form-group1">
          <Form.Label className="form-label1">Childs</Form.Label>
          <Form.Control as="select" name="childs" value={formData.childs} onChange={handleChange} required>
            <option value="">Select</option>
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="form-group1">
          <Form.Label className="form-label1">Adults</Form.Label>
          <Form.Control as="select" name="adults" value={formData.adults} onChange={handleChange} required>
            <option value="">Select</option>
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button className="submit-btn1" type="submit">
          Submit Booking
        </Button>
      </Form>
    </motion.div>
  );
};

export default Book;

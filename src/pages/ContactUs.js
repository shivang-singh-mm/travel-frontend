import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css"; // Ensure you have a separate CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    description: ""
  });

  const baseurl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseurl}/api/enquiry`, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", number: "", description: "" });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  return (
    <div>
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <input type="text" name="number" placeholder="Your Phone Number" onChange={handleChange} required />
          <textarea name="description" placeholder="Your Message" rows="5" onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details-container">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> info@angeldestination.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9773980709
          </p>
          <p>
            <strong>Address:</strong> Surajpur
            Greater Noida
            Gautam budh nagar
            Pincode 201306
          </p>
        </div>
      </div>

      {/* Map Section */}
    </div>
  );
};

export default ContactUs;

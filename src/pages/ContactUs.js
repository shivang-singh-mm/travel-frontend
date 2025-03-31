import React from "react";
import "./ContactUs.css"; // Ensure you have a separate CSS file for styling

const ContactUs = () => {
  return (
    <div>
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details-container">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> email@angeldestination.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9773980709
          </p>
          <p>
            <strong>Address:</strong> Surajpur
            Greater Noida
            Gautam budh nagar
            Pincode 201306
          </p>
        </div>
      </div>

      {/* Map Section */}
      
    </div>
  );
};

export default ContactUs;

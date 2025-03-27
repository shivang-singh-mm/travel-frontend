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
            <strong>Email:</strong> contact@travelexplorer.com
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Address:</strong> 123, Wanderlust Street, New Delhi, India
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1162860241345!2d-122.41941518468282!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjAiTiAxMjLCsDI1JzE5LjkiVw!5e0!3m2!1sen!2sin!4v1633045027487!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

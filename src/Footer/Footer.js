
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3 className="footer-title">Angel Destination</h3>
          <p>Welcome to Angel Destination, your one-stop destination for seamless travel planning! Whether you're looking for a quick getaway, an exotic vacation, or a cultural expedition, we bring you the best tour packages, hotel bookings, and travel experiences at unbeatable prices.</p>
        </div>

        <div className='footer-section'>
          <h3 className="footer-title">Popular Destinations</h3>
          <ul>
            <p>🏰 Rajasthan Tour Packages</p>
            <p>🌴 Kerala Tour Packages</p>
            <p>🏛️ Golden Triangle Tours</p>
            <p>🏖️ Goa Tour Packages</p>
          </ul>
        </div>

        <div className='footer-section newsletter'>
          <h3 className="footer-title">Contact Information</h3>
          <p><FaMapMarkerAlt className="icon" /> D-7/296, Near Rohini West Metro Station, Delhi - 110085</p>
          <p><FaEnvelope className="icon" /> info@angeldestination.com</p>
          <p><FaPhoneAlt className="icon" /> +91-93104-15267, 011-35959936</p>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>©2025 Angle Destination All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

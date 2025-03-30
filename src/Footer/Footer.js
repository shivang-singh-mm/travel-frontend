
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Footer() {


  const [packages, setPackages] = useState([]);

  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await axios.get(`${baseurl}/api/tour`);
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    }
    fetchPackages();
  }, []);

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
            {packages.map(item => (
              <p>{item.city}</p>
            ))}
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

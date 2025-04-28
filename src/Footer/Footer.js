import React, { useEffect, useState } from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp // ✅ WhatsApp icon added
} from 'react-icons/fa';
import './Footer.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Footer() {
  const [packages, setPackages] = useState([]);
  const baseurl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await axios.get(`${baseurl}/api/theme`);
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
          <p className='footer-text'>
            Welcome to Angel Destination, your one-stop destination for seamless travel planning! Whether you're looking for a quick getaway, an exotic vacation, or a cultural expedition, we bring you the best tour packages, hotel bookings, and travel experiences at unbeatable prices.
          </p>
        </div>

        <div className='footer-section'>
          <h3 className="footer-title">Themes</h3>
          <ul className='footer-destination-list'>
            {packages.slice(0, 5).map((item) => (
              <Link to={`/theme/${item.title}/${item._id}`}>
                <li key={item._id}>📍 {item.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='footer-section newsletter'>
          <h3 className="footer-title">Contact Information</h3>
          <p>
            <FaMapMarkerAlt className="icon" /> Surajpur, Greater Noida, Gautam Budh Nagar, Pincode 201306
          </p>
          <p>
            <FaEnvelope className="icon" />
            <a href="mailto:info@angeldestination.com" className='mailTo'> info@angeldestination.com</a>
          </p>
          <p>
            <FaPhoneAlt className="icon" />
            <a href="tel:+919773980709" className='mailTo'> +91-9773980709</a>
          </p>

          <div className="social-links">
            <a href="https://wa.me/919773980709" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={25} color="#25D366" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575245982687" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={25} color='#1877F2' />
            </a>
            <a href="https://www.instagram.com/p/DIJwGdKTiem/?igsh=aTdzZmV1MnNmOG54" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} color='#E4405F' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} color='#1DA1F2' />
            </a>

          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>©2025 Angel Destination. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

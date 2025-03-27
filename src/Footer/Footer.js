import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' style={{ background: 'linear-gradient(90deg, #005aa7, #fffde4)' }}>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Traveller</h3>
           <p className='text-align-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        
        </div>
        <div className='footer-section'>
           <h3>Popular Desitanation</h3>
           <p>Rajasthan Tour Packages
 
</p>
           <p>Kerala Tour Packages</p>
           <p>Golden Triangle Tours</p>
           <p>Goa Tour Packages</p>
        </div>
        <div className='footer-section newsletter'>
          <h3>Contact Imformation</h3>
               <h4>Trveller.com PVT. LTD.</h4>
               <p>
               D-7/296, First Floor, Near Rohini West Metro Station, Sector - 6, Rohini Delhi - 110085</p>
               <p>
               info@joyplusholidays.com</p>
               <p>
               +91-93104-15267, 011-35959936</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>@2025.Traveller_webiste. All the Rights reserved About Us | Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;

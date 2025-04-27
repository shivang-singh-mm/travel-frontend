import React, { useState } from 'react';
import './PopularDestinationForm2.css';
import axios from 'axios';
import { useEffect } from 'react';

function PopularDestinationForm2() {
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample data (Modify as needed)
  const [data, setData] = useState([]);


  const baseurl = process.env.REACT_APP_API_URL

  async function fecthEnquiry() {
    const fetchEnquiryRes = await axios.get(`${baseurl}/api/enquiry/`);
    setData(fetchEnquiryRes.data)
  }

  useEffect(() => {
    fecthEnquiry()
  }, [])


  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedUser(null);
    }
  };

  return (
    <div className="list-container">
      <h3 className='tittle-a'> Enquiries</h3>
      {data.map((item, index) => (
        <div key={index} className="list-item">
          <p className="client-name">{index + 1}. {item.name}</p>
          <div className="client-details">
            <button className="add-btn" onClick={() => handleView(item)}>View</button>
          </div>
        </div>
      ))}

      {selectedUser && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedUser(null)}>✖</button>

            <h4 className="modal-title">User Information</h4>

            <div className="card-container">
              {/* First Card */}
              <div className="info-card">
                {/* <h4>Personal Details</h4> */}
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.number}</p>
              </div>

              {/* Second Card */}
              <div className="info-card">
                {/* <h4>Travel Details</h4> */}
                <p><strong>Destination:</strong> {selectedUser.destination}</p>
                <p><strong>No. of Adults:</strong> {selectedUser.adults}</p>
                <p><strong>No. of Childs:</strong> {selectedUser.childs}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default PopularDestinationForm2;

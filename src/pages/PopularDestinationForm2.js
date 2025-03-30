import React, { useState } from 'react';
import './PopularDestinationForm2.css';

function PopularDestinationForm2() {
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample data (Modify as needed)
  const data = [
    { 
      fullName: 'Saumya Singh', 
      email: 'saumya@example.com', 
      destination: 'New Delhi, India', 
      phone: '+1 123-456-7890', 
      persons: 3 
    },
    { 
      fullName: 'Amit Sharma', 
      email: 'amit@example.com', 
      destination: 'Paris, France', 
      phone: '+33 6 12 34 56 78', 
      persons: 2 
    },
    { 
      fullName: 'Riya Patel', 
      email: 'riya@example.com', 
      destination: 'Tokyo, Japan', 
      phone: '+81 90-1234-5678', 
      persons: 4 
    }
  ];

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
          <p className="client-name">{index + 1}. {item.fullName}</p>
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
                <h4>Personal Details</h4>
                <p><strong>Name:</strong> {selectedUser.fullName}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
              </div>

              {/* Second Card */}
              <div className="info-card">
                <h4>Travel Details</h4>
                <p><strong>Destination:</strong> {selectedUser.destination}</p>
                <p><strong>No. of Persons:</strong> {selectedUser.persons}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default PopularDestinationForm2;

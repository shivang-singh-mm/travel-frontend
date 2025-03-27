import React, { useState } from 'react';
import './PostDestination.css';

const PostDestination = () => {
  const [destination, setDestination] = useState({
    name: '',
    location: '',
    description: '',
    bestTime: '',
    activities: '',
    cost: '',
    rating: '',
    image: '',
  });

  const handleInputChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDestination({ ...destination, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination.name && destination.location && destination.description && destination.bestTime) {
      alert('Destination added successfully!');
      setDestination({ name: '', location: '', description: '', bestTime: '', activities: '', cost: '', rating: '', image: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="post-destination-container">
      <h2>Add a New Destination</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Destination Name *" value={destination.name} onChange={handleInputChange} required />
        <input type="text" name="location" placeholder="Location *" value={destination.location} onChange={handleInputChange} required

        />
        <textarea name="description" placeholder="Short Description *" value={destination.description} onChange={handleInputChange} required></textarea>
        <input type="text" name="bestTime" placeholder="Best Time to Visit *" value={destination.bestTime} onChange={handleInputChange} required />
        <input type="text" name="activities" placeholder="Activities Available" value={destination.activities} onChange={handleInputChange} />
        <input type="number" name="cost" placeholder="Average Cost (in USD)" value={destination.cost} onChange={handleInputChange} />
        <input type="number" name="rating" min="1" max="5" placeholder="Rating (1-5)" value={destination.rating} onChange={handleInputChange} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {destination.image && <img src={destination.image} alt="Destination Preview" className="preview-img" />}

        <button type="submit">Post </button>
      </form>
    </div>
  );
};

export default PostDestination;

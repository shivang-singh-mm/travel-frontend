import React, { useState } from 'react';
import axios from 'axios';
import './TourPage.css';

const PostReview = () => {
    const [review, setReview] = useState({
        name: '',
        occupation: '',
        review: '',
        star_number: '',
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const baseurl = process.env.REACT_APP_API_URL;

    const handleInputChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleImageSelection = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const uploadImage = async (file) => {
        if (!file) return '';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'test-name');

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dmfxly4bz/image/upload', formData);
            return response.data.secure_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const imageUrl = await uploadImage(selectedImage);
            const finalData = { ...review, star_number: parseInt(review.star_number), url: imageUrl };
            await axios.post(`${baseurl}/api/review`, finalData);
            alert('Review added successfully!');

            setReview({ name: '', occupation: '', review: '', star_number: '', url: null });
            setSelectedImage(null);
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div className="post-destination-container">
            <h2>Add a New Review</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name *" value={review.name} onChange={handleInputChange} required />
                <input type="text" name="occupation" placeholder="Occupation *" value={review.occupation} onChange={handleInputChange} required />
                <textarea name="review" placeholder="Review *" value={review.review} onChange={handleInputChange} required></textarea>
                <input type="number" name="star_number" placeholder="Star Number (1-5) *" value={review.star_number} onChange={handleInputChange} min="1" max="5" required />

                <label>Upload Photo:</label>
                <input type="file" accept="image/*" onChange={handleImageSelection} />

                <button type="submit">Post Review</button>
            </form>
        </div>
    );
};

export default PostReview;
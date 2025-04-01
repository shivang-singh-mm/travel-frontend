import React, { useState } from 'react';
import axios from 'axios';
import './TourPage.css';

const PostOffer = () => {
    const [offer, setOffer] = useState({
        title: '',
        description: '',
        title1: '',
        description1: '',
        title2: '',
        description2: '',
        title3: '',
        description3: ''
    });
    const [selectedImages, setSelectedImages] = useState({
        url1: null,
        url2: null,
        url3: null
    });

    const baseurl = process.env.REACT_APP_API_URL;

    const handleInputChange = (e) => {
        setOffer({ ...offer, [e.target.name]: e.target.value });
    };

    const handleImageSelection = (e, type) => {
        setSelectedImages((prev) => ({ ...prev, [type]: e.target.files[0] }));
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
            const url1 = await uploadImage(selectedImages.url1);
            const url2 = await uploadImage(selectedImages.url2);
            const url3 = await uploadImage(selectedImages.url3);

            const finalData = { ...offer, url1, url2, url3 };
            await axios.post(`${baseurl}/api/offer`, finalData);
            alert('Offer added successfully!');
            setOffer({ title: '', description: '', title1: '', description1: '', title2: '', description2: '', title3: '', description3: '' });
            setSelectedImages({ url1: null, url2: null, url3: null });
        } catch (error) {
            console.error('Error submitting offer:', error);
        }
    };

    return (
        <div className="post-destination-container">
            <h2>Add a New Offer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title *" value={offer.title} onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description *" value={offer.description} onChange={handleInputChange} required></textarea>

                <input type="text" name="title1" placeholder="Title 1 *" value={offer.title1} onChange={handleInputChange} required />
                <label>Upload Image 1:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'url1')} required />
                <textarea name="description1" placeholder="Description 1 *" value={offer.description1} onChange={handleInputChange} required></textarea>

                <input type="text" name="title2" placeholder="Title 2 *" value={offer.title2} onChange={handleInputChange} required />
                <label>Upload Image 2:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'url2')} required />
                <textarea name="description2" placeholder="Description 2 *" value={offer.description2} onChange={handleInputChange} required></textarea>

                <input type="text" name="title3" placeholder="Title 3 *" value={offer.title3} onChange={handleInputChange} required />
                <label>Upload Image 3:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'url3')} required />
                <textarea name="description3" placeholder="Description 3 *" value={offer.description3} onChange={handleInputChange} required></textarea>

                <button type="submit">Post Offer</button>
            </form>
        </div>
    );
};

export default PostOffer;

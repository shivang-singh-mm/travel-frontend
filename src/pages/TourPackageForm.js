import React, { useState } from 'react';
import axios from 'axios';
import './TourPage.css';

const PostTourPackage = () => {
    const [tourPackage, setTourPackage] = useState({
        city: '',
        description: '',
        pricing: '',
        included: '',
        destinations_covered: '',
        hotel_facilities: '',
        cab_available: '',
        hotel_photos: '',
        destination_photos: '',
        cab_photos: '',
        popular_package: ''
    });

    const [selectedImages, setSelectedImages] = useState({
        coverImage: null,
        hotelImage: null,
        destinationImage: null,
        cabImage: null
    });
    const baseurl = process.env.REACT_APP_API_URL

    const handleInputChange = (e) => {
        setTourPackage({ ...tourPackage, [e.target.name]: e.target.value });
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
            const coverUrl = await uploadImage(selectedImages.coverImage);
            const hotelPhoto = await uploadImage(selectedImages.hotelImage);
            const destinationPhoto = await uploadImage(selectedImages.destinationImage);
            const cabPhoto = await uploadImage(selectedImages.cabImage);

            const finalData = { ...tourPackage, coverUrl, hotel_url: hotelPhoto, destination_url: destinationPhoto, cab_url: cabPhoto };
            await axios.post(`${baseurl}/api/tour`, finalData);
            console.log(`${baseurl}/api/tour`)
            alert('Tour Package added successfully!');

            setTourPackage({ city: '', coverUrl: '', description: '', pricing: '', included: '', destinations_covered: '', hotel_facilities: '', cab_available: '', hotel_photos: '', destination_photos: '', cab_photos: '', popular_package: '' });
            setSelectedImages({ coverImage: null, hotelImage: null, destinationImage: null, cabImage: null });
        } catch (error) {
            console.error('Error submitting package:', error);
        }
    };

    return (
        <div className="post-destination-container">
            <h2>Add a New Tour Package</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="city" placeholder="City *" value={tourPackage.city} onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description *" value={tourPackage.description} onChange={handleInputChange} required></textarea>
                <input type="text" name="pricing" placeholder="Pricing *" value={tourPackage.pricing} onChange={handleInputChange} required />
                <input type="text" name="included" placeholder="Included Services *" value={tourPackage.included} onChange={handleInputChange} required />
                <input type="text" name="destinations_covered" placeholder="Destinations Covered *" value={tourPackage.destinations_covered} onChange={handleInputChange} required />
                <textarea type="text" name="hotel_facilities" placeholder="Hotel Facilities *" value={tourPackage.hotel_facilities} onChange={handleInputChange} required />
                <textarea type="text" name="cab_available" placeholder="Cab Available *" value={tourPackage.cab_available} onChange={handleInputChange} required />
                <textarea type="text" name="popular_package" placeholder="Popular Package *" value={tourPackage.popular_package} onChange={handleInputChange} required />

                <label>Cover Image:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'coverImage')} />

                <label>Hotel Photo:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'hotelImage')} />

                <label>Destination Photo:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'destinationImage')} />

                <label>Cab Photo:</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'cabImage')} />

                <button type="submit">Post Tour Package</button>
            </form>
        </div>
    );
};

export default PostTourPackage;


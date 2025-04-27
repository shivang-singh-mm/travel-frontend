import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TourPage.css';
import { useParams } from 'react-router-dom';

const EditOffer = () => {
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

    const [previewUrls, setPreviewUrls] = useState({
        url1: '',
        url2: '',
        url3: ''
    });

    const { _id: offerId } = useParams();
    const baseurl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const res = await axios.get(`${baseurl}/api/offer/${offerId}`);
                const { title, description, extras } = res.data;

                const title1 = extras[0]?.title || "";
                const description1 = extras[0]?.description || "";
                const url1 = extras[0]?.url || "";

                const title2 = extras[1]?.title || "";
                const description2 = extras[1]?.description || "";
                const url2 = extras[1]?.url || "";

                const title3 = extras[2]?.title || "";
                const description3 = extras[2]?.description || "";
                const url3 = extras[2]?.url || "";
                setOffer({ title, description, title1, description1, title2, description2, title3, description3 });
                setPreviewUrls({ url1, url2, url3 });
            } catch (error) {
                console.error('Error fetching offer:', error);
            }
        };

        if (offerId) fetchOffer();
    }, [offerId, baseurl]);

    const handleInputChange = (e) => {
        setOffer({ ...offer, [e.target.name]: e.target.value });
    };

    const handleImageSelection = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImages((prev) => ({ ...prev, [type]: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrls((prev) => ({ ...prev, [type]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
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
            const urls = await Promise.all([
                selectedImages.url1 ? uploadImage(selectedImages.url1) : previewUrls.url1,
                selectedImages.url2 ? uploadImage(selectedImages.url2) : previewUrls.url2,
                selectedImages.url3 ? uploadImage(selectedImages.url3) : previewUrls.url3
            ]);

            const updatedOffer = {
                ...offer,
                url1: urls[0],
                url2: urls[1],
                url3: urls[2]
            };

            await axios.put(`${baseurl}/api/offer/${offerId}`, updatedOffer);
            alert('Offer updated successfully!');
        } catch (error) {
            console.error('Error updating offer:', error);
        }
    };

    return (
        <div className="post-destination-container">
            <h2>Edit Offer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title *" value={offer.title} onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description *" value={offer.description} onChange={handleInputChange} required></textarea>

                <input type="text" name="title1" placeholder="Title 1 *" value={offer.title1} onChange={handleInputChange} required />
                <label>Upload Image 1:</label>
                {previewUrls.url1 && <img src={previewUrls.url1} alt="Preview 1" className="preview-img" />}
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'url1')} />

                <textarea name="description1" placeholder="Description 1 *" value={offer.description1} onChange={handleInputChange} required></textarea>

                <input type="text" name="title2" placeholder="Title 2 *" value={offer.title2} onChange={handleInputChange} required />
                <label>Upload Image 2:</label>
                {previewUrls.url2 && <img src={previewUrls.url2} alt="Preview 2" className="preview-img" />}
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'url2')} />

                <textarea name="description2" placeholder="Description 2 *" value={offer.description2} onChange={handleInputChange} required></textarea>

                <input type="text" name="title3" placeholder="Title 3 *" value={offer.title3} onChange={handleInputChange} required />
                <label>Upload Image 3:</label>
                {previewUrls.url3 && <img src={previewUrls.url3} alt="Preview 3" className="preview-img" />}
                <input type="file" accept="image/*" onChange={(e) => handleImageSelection(e, 'url3')} />

                <textarea name="description3" placeholder="Description 3 *" value={offer.description3} onChange={handleInputChange} required></textarea>

                <button type="submit">Update Offer</button>
            </form>
        </div>
    );
};

export default EditOffer;

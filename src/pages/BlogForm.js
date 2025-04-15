import React, { useState } from 'react';
import axios from 'axios';
import './TourPage.css';

const PostBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        description: '',
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const baseurl = process.env.REACT_APP_API_URL;

    const handleInputChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
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
            const finalData = { ...blog, url: imageUrl };
            await axios.post(`${baseurl}/api/blog`, finalData);
            alert('Blog added successfully!');
            setBlog({ title: '', description: '', url: '' });
            setSelectedImage(null);
        } catch (error) {
            console.error('Error submitting blog:', error);
        }
    };

    return (
        <div className="post-destination-container">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title *" value={blog.title} onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description *" value={blog.description} onChange={handleInputChange} required></textarea>
                <label>Upload Image:</label>
                <input type="file" accept="image/*" onChange={handleImageSelection} required />
                <button type="submit">Post Blog</button>
            </form>
        </div>
    );
};

export default PostBlog;


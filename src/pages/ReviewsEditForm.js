import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./TourPage.css";

const EditReview = () => {
    const [review, setReview] = useState({
        name: "",
        occupation: "",
        review: "",
        star_number: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploading, setUploading] = useState(false);
    const baseurl = process.env.REACT_APP_API_URL;
    const { _id: reviewId } = useParams();

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const res = await axios.get(`${baseurl}/api/review/${reviewId}`);
                const { name, occupation, review, star_number, url } = res.data;
                setReview({ name, occupation, review, star_number });
                setPreviewUrl(url);
            } catch (error) {
                console.error("Error fetching review:", error);
            }
        };

        if (reviewId) {
            fetchReview();
        }
    }, [reviewId, baseurl]);

    const handleInputChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleImageSelection = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (file) => {
        if (!file) return "";
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "test-name");

        try {
            const res = await axios.post("https://api.cloudinary.com/v1_1/dmfxly4bz/image/upload", formData);
            return res.data.secure_url;
        } catch (error) {
            console.error("Image upload error:", error);
            return "";
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            let imageUrl = previewUrl;

            if (selectedImage) {
                imageUrl = await uploadImage(selectedImage);
            }

            const updatedReview = {
                ...review,
                star_number: parseInt(review.star_number),
                url: imageUrl,
            };

            await axios.put(`${baseurl}/api/review/${reviewId}`, updatedReview);

            alert("Review updated successfully!");
        } catch (error) {
            console.error("Error updating review:", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="post-destination-container">
            <h2>Edit Review</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={review.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="occupation"
                    placeholder="Occupation *"
                    value={review.occupation}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="review"
                    placeholder="Review *"
                    value={review.review}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="number"
                    name="star_number"
                    placeholder="Star Number (1-5) *"
                    value={review.star_number}
                    onChange={handleInputChange}
                    min="1"
                    max="5"
                    required
                />

                <label>Upload Photo:</label>
                <input type="file" accept="image/*" onChange={handleImageSelection} />

                {previewUrl && (
                    <div className="mt-3">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            style={{ maxHeight: "300px", borderRadius: "10px" }}
                        />
                    </div>
                )}

                <button type="submit" disabled={uploading}>
                    {uploading ? "Updating..." : "Update Review"}
                </button>
            </form>
        </div>
    );
};

export default EditReview;


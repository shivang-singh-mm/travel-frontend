// import React, { useState } from 'react';
// import axios from 'axios';
// import './TourPage.css';

// const PopularDestination = () => {
//     const [gallery, setGallery] = useState({
//         title: '',
//         description: ''
//     });

//     const [selectedImage, setSelectedImage] = useState(null);
//     const baseurl = process.env.REACT_APP_API_URL;

//     const handleInputChange = (e) => {
//         setGallery({ ...gallery, [e.target.name]: e.target.value });
//     };

//     const handleImageSelection = (e) => {
//         setSelectedImage(e.target.files[0]);
//     };

//     const uploadImage = async (file) => {
//         if (!file) return '';
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('upload_preset', 'test-name');

//         try {
//             const response = await axios.post('https://api.cloudinary.com/v1_1/dmfxly4bz/image/upload', formData);
//             return response.data.secure_url;
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             return '';
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const imageUrl = await uploadImage(selectedImage);
//             if (!imageUrl) {
//                 alert('Failed to upload image.');
//                 return;
//             }

//             const finalData = { ...gallery, image_url: imageUrl };
//             await axios.post(`${baseurl}/api/gallery`, finalData);
//             alert('Gallery item added successfully!');

//             setGallery({ title: '', description: '' });
//             setSelectedImage(null);
//         } catch (error) {
//             console.error('Error submitting gallery item:', error);
//         }
//     };

//     return (
//         <div className="post-destination-container">
//             <h2>Add a New Gallery Item</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="title" placeholder="Title *" value={gallery.title} onChange={handleInputChange} required />
//                 <textarea name="description" placeholder="Description *" value={gallery.description} onChange={handleInputChange} required></textarea>

//                 <label>Image:</label>
//                 <input type="file" accept="image/*" onChange={handleImageSelection} required />

//                 <button type="submit">Post Gallery Item</button>
//             </form>
//         </div>
//     );
// };

// export default PopularDestination;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera, FaCheckCircle, FaSpinner } from "react-icons/fa";
import "./App.css";

export default function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, uploading, success
  const [fileError, setFileError] = useState(false); // for file validation

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileError(false); // reset error when a file is selected

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!selectedFile) {
      setFileError(true);
      return;
    }

    setUploadStatus("uploading");

    setTimeout(() => {
      console.log("Post Submitted:", { title, description, selectedFile });
      setUploadStatus("success");

      setTimeout(() => {
        setUploadStatus("idle");
      }, 3000);
    }, 2000);
  };

  const renderStatus = () => {
    if (uploadStatus === "uploading") {
      return (
        <div className="text-info d-flex align-items-center gap-2">
          <FaSpinner className="spinner-border-sm spin" /> Uploading...
        </div>
      );
    }
    if (uploadStatus === "success") {
      return (
        <div className="text-success d-flex align-items-center gap-2">
          <FaCheckCircle /> Upload Successful!
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mt-5">
      <div className="row bg-light p-4 rounded border border-light border-3 custom-shadow">
        <h1 className="h1">Add a New Gallery Item</h1>

        {/* Left: Preview & File Input */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <div className="mb-3">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="img-fluid rounded border border-secondary border-2 shadow"
                style={{ maxHeight: "300px" }}
              />
            ) : (
              <div
                className="d-flex justify-content-center align-items-center border border-secondary border-2 rounded shadow"
                style={{ height: "300px", backgroundColor: "#e9ecef" }}
              >
                <FaCamera size={50} className="text-secondary" />
              </div>
            )}
          </div>

          <input
            type="file"
            className={`form-control ${fileError ? "is-invalid" : ""}`}
            onChange={handleFileChange}
          />
          {fileError && (
            <div className="invalid-feedback d-block text-start">
              Please select a file before posting.
            </div>
          )}
        </div>

        {/* Right: Title, Description, Status, Button */}
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Title"
              className="form-control border border-secondary border-2 shadow-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)} required
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Description"
              className="form-control border border-secondary border-2 shadow-sm"
              rows="10"
              required
               value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Upload Status */}
          <div className="mb-2">{renderStatus()}</div>

          <button
            className="btn btn-success w-100 shadow"
            onClick={handlePost}
            disabled={uploadStatus === "uploading"}
          >
            {uploadStatus === "uploading" ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}
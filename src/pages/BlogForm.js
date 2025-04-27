import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera, FaCheckCircle, FaSpinner } from "react-icons/fa";
import axios from "axios";
import "./App.css";

export default function BlogForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, uploading, success
  const [fileError, setFileError] = useState(false); // for file validation

  const baseurl = process.env.REACT_APP_API_URL; // <-- Replace with your actual API

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileError(false);

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
    formData.append("upload_preset", "test-name"); // <-- your Cloudinary preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmfxly4bz/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return "";
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setFileError(true);
      return;
    }

    setUploadStatus("uploading");

    try {
      const imageUrl = await uploadImage(selectedFile);

      const blogData = {
        title,
        description,
        url: imageUrl,
      };

      await axios.post(`${baseurl}/api/blog`, blogData);

      setUploadStatus("success");

      setTimeout(() => {
        setUploadStatus("idle");
        setSelectedFile(null);
        setPreviewUrl(null);
        setTitle("");
        setDescription("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting blog:", error);
      setUploadStatus("idle");
    }
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
        <h1 className="tittle-a">Add New Blog</h1>

        {/* Left: Preview & File Input */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <div className="mb-3">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="img-fluid rounded border border-secondary border-2 shadow"
                style={{ minHeight: "300px", minWidth: "500px" }}
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Description"
              className="form-control border border-secondary border-2 shadow-sm"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-2">{renderStatus()}</div>

          <button
            className="btn btn-success w-100 shadow"
            onClick={handleSubmit}
            disabled={uploadStatus === "uploading"}
          >
            {uploadStatus === "uploading" ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

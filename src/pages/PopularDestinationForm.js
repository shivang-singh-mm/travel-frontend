import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera, FaCheckCircle, FaSpinner } from "react-icons/fa";
import axios from "axios";
import "./App.css";

export default function PopularDestinationForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [fileError, setFileError] = useState(false);

  const baseurl = process.env.REACT_APP_API_URL; // ← Replace with your actual backend API

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
    formData.append("upload_preset", "test-name"); // ← Use your Cloudinary upload preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dmfxly4bz/image/upload",
        formData
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Image upload error:", err);
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

      const destinationData = {
        title,
        description,
        image_url: imageUrl,
      };

      await axios.post(`${baseurl}/api/gallery`, destinationData);

      setUploadStatus("success");

      setTimeout(() => {
        setUploadStatus("idle");
        setSelectedFile(null);
        setPreviewUrl(null);
        setTitle("");
        setDescription("");
      }, 3000);
    } catch (error) {
      console.error("Destination submission error:", error);
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
        <h1 className="tittle-a">Add Popular Destinations</h1>

        {/* Left: Image preview + input */}
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

        {/* Right: Form Fields */}
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

          {/* Upload Status */}
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

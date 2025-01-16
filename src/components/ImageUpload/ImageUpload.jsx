import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ImageUpload.css";

const ImageUpload = ({ onPrevious, formData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formData.image = reader.result; // Convert image to Base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");
    try {
      
      const response = await axios.post("http://127.0.0.1:8000/user/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response:", response.data);

      // Navigate to success page
      navigate("/success");
    } catch (err) {
      setError("An error occurred while submitting. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="uploader">
      <h2>Upload Image</h2>

      <input
        id="hiddenFileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      <button type="button" className="btn-upload" onClick={() => document.getElementById("hiddenFileInput").click()}>
        Choose Image
      </button>

      {formData.image && (
        <div className="image-preview">
          <img className="upload" src={formData.image} alt="Preview" />
        </div>
      )}

      <div className="button-group">
        <button type="button" className="btn-prev" onClick={onPrevious}>
          Previous
        </button>
        <button type="button" className="btn-submit" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {error && <p className="helper-text error visible">{error}</p>}

      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

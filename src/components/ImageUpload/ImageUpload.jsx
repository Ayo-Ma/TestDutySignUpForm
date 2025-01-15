import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onPrevious, formData, setFormData }) => {
  const [isLoading, setIsLoading] = useState(false); // State to track loader visibility

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('hiddenFileInput').click();
  };

  const handleSubmit = () => {
    console.log(formData)
    setIsLoading(true); // Show the loader
    setTimeout(() => {
      window.location.reload(); // Reload the page after 3 seconds
    }, 3000);
  };

  return (
    <div className='uploader'>
      <h2>Upload Image</h2>

      <input
        id="hiddenFileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      <button type="button" className="btn-upload" onClick={triggerFileInput}>
        Choose Image
      </button>

      {formData.image && (
        <div className='image-preview'>
          <img className='upload' src={formData.image} alt="Preview" />
        </div>
      )}

      <div className='button-group'>
        <button type="button" className='btn-prev' onClick={onPrevious}>Previous</button>
        <button type="button" className='btn-submit' onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

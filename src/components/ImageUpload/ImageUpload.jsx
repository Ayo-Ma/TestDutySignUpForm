import  './ImageUpload.css';

const ImageUpload = ({ onPrevious, formData, setFormData }) => {
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
  
    return (
      <div>
        <h2>Upload Image</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {formData.image && <img src={formData.image} alt="Preview" style={{ width: "100px", height: "100px" }} />}
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="button" onClick={() => alert('Form Submitted!')}>Submit</button>
      </div>
    );
  }

  export default ImageUpload;
  
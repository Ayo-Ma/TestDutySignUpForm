import React, { useState } from "react";
import "./PersonalInfo.css";
import SignUpImage from "../../assets/signImage.jpg";

const PersonalInfo = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleClearInput = () => {
    formData.name = "";
    formData.username = "";
    formData.email = "";
    formData.password = "";
    formData.role = "";
  };

  const validateInputs = () => {
    const newErrors = {};
    const namePattern = /^.{3,50}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{3,}$/;

    if (!namePattern.test(formData.name)) {
      newErrors.name = "Name must be between 3 and 50 characters.";
    }
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "Password must be at least 3 characters long, include a capital letter, a lowercase letter, and a symbol.";
    }
    if (!formData.username) {
      newErrors.username = "Username is required.";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setSuccessMessage("All inputs are valid! Proceeding to the next step...");
      
      setTimeout(() => {
        setSuccessMessage("");
        onNext();
      }, 3000);
    }
  };

  return (
    <div className="personalInfo">
      <form className="form"  onSubmit={handleSubmit}>
        <div className="personal_info_head">
          <h2 className="personal_info_head_h2">Sign Up</h2>
          <p className="personal_info_head_link">
            Create an account or{" "}
            <a className="personal_info_head_link_highlight" href="#">
              Sign up
            </a>
          </p>
        </div>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <span className={`helper-text ${errors.name ? "visible" : ""}`}>
          {errors.name}
        </span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <span className={`helper-text ${errors.email ? "visible" : ""}`}>
          {errors.email}
        </span>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <span className={`helper-text ${errors.username ? "visible" : ""}`}>
          {errors.username}
        </span>

        <label htmlFor="role">Role</label>
        <select
          className="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
        <span className={`helper-text ${errors.role ? "visible" : ""}`}>
          {errors.role}
        </span>

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <span className={`helper-text ${errors.password ? "visible" : ""}`}>
          {errors.password}
        </span>

        <button className="btn-submit" type="submit">
          Next
        </button>
        {successMessage && (
          <p className={`helper-text success visible`}>{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default PersonalInfo;

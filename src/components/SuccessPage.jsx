import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./SuccessPage.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // Navigate back after 10 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-page">
      <IoMdCheckmarkCircle className="success-icon"  />

      <h1 className="success-message">Form Submitted Successfully!</h1>
    </div>
  );
};

export default SuccessPage;

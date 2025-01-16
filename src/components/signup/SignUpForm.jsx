import { useState } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ImageUpload from "../ImageUpload/ImageUpload";
import SuccessPage from "../SuccessPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    role: "",
   /*  image: "", */
  });
  const [step, setStep] = useState(1);

  const onNext = () => setStep(step + 1);
  const onPrevious = () => setStep(step - 1);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {step === 1 && (
                <PersonalInfo
                  onNext={onNext}
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
              {step === 2 && (
                <ImageUpload
                  onPrevious={onPrevious}
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
            </div>
          }
        />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default SignUpForm;

import { useState } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ImageUpload from "../ImageUpload/ImageUpload";

const  SignUpForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      username: '',
      password: '',
      role : '',
      image: ''
    });
    const [step, setStep] = useState(1);
  
    const onNext = () => setStep(step + 1);
    const onPrevious = () => setStep(step - 1);
  
    return (
      <div>
        {step === 1 && <PersonalInfo onNext={onNext} formData={formData} setFormData={setFormData} />}
        {step === 2 && <ImageUpload onPrevious={onPrevious} formData={formData} setFormData={setFormData} />}
      </div>
    );
  }

  export default SignUpForm;
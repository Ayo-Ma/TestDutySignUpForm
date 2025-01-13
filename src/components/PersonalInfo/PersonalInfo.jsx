import  './PersonalInfo.css';
import SignUpImage from '../../assets/signImage.jpg'
const PersonalInfo = ({ onNext, formData, setFormData }) =>  {
    return (
      <div className='personalInfo'>

        
        <form className='form' onSubmit={(e) => { e.preventDefault(); onNext(); }}>
          <div className="personal_info_head">
             <h2 className='personal_info_head_h2'>Personal Information</h2>
             <p className='personal_info_head_link'>Create an account or <a className='personal_info_head_link_highlight' href="#">Sign up</a></p>
          </div>
       
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <br></br>
          <button className='btn-submit' type="submit">Next</button>
        </form>
        <div className="signImage">
          <img src={SignUpImage} alt="Sign Up Image" loading='lazy' />
        </div>
      </div>
    );
  }

  export default PersonalInfo;
  

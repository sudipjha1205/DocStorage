import axios from "axios";
import React, { useState } from "react";
import "./login.css"; // Ensure that your CSS file is correctly linked
import show from "../../Illustrations/show.png";
import hide from "../../Illustrations/hide.png";

const Registration = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    register_username: '',
    register_password: '',
    register_confirmpassword: '',
  });
  const [error, setError] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.register_password != formData.register_confirmpassword){
      setError("Passwords don't match");
      alert("Password doesn't matches");
      return
    }

    try {
      const response = fetch('http://localhost:8000/api/register/',{method:'post', headers: {'Content-Type': 'application/json'},body: JSON.stringify({'email':formData.register_email, 'password': formData.register_password})});
      console.log(response.data);
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration failed', error);
    }

    
  };

  return (
    <div>
        <h3>Registration Form</h3>
            <form className="form-style">
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <label htmlFor="register_username" className="label-style">
                Email:
              </label>
              <input className="input-style" type="text" id="register_username" name="register_username" onChange={handleChange} required />

              <label className="label-style" htmlFor="register_password">
                Password:
              </label>
              <div className="password-toggle">
                <input type={showPassword ? 'text' : 'password'} className="input-style" id="register_password" name="register_password" value={formData['register_password']} onChange={handleChange} required />
                <button className="password-button-style" type="button" onClick={handleTogglePassword}>
                  {showPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
                </button>
              </div>
              <label className="label-style" htmlFor="register_confirmpassword">
                Confirm Password:
              </label>
              <div className="password-toggle">
                <input type={showConfirmPassword ? 'text' : 'password'} className="input-style" id="register_confirmpassword" name="register_confirmpassword" value={formData['register_confirmpassword']} onChange={handleChange} required />
                <button className="password-button-style" type="button" onClick={handleToggleConfirmPassword}>
                  {showConfirmPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
                </button>
              </div>

              <button type="submit" className="button-style" onClick={handleSubmit}>
                Submit
              </button>
            </form>
    </div>
  );
};

export default Registration;

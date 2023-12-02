import React, { useState } from "react";
import "./login.css"; // Ensure that your CSS file is correctly linked
import show from "../../Illustrations/show.png";
import hide from "../../Illustrations/hide.png";

const Registration = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
        <h3>Registration Form</h3>
            <form className="form-style">
              <label htmlFor="username" className="label-style">
                Username:
              </label>
              <input className="input-style" type="text" id="username" name="username" required />

              <label className="label-style" htmlFor="password">
                Password:
              </label>
              <div className="password-toggle">
                <input type={showPassword ? 'text' : 'password'} className="input-style" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="password-button-style" type="button" onClick={handleTogglePassword}>
                  {showPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
                </button>
              </div>
              <label className="label-style" htmlFor="password">
                Confirm Password:
              </label>
              <div className="password-toggle">
                <input type={showPassword ? 'text' : 'password'} className="input-style" id="password" name="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button className="password-button-style" type="button" onClick={handleTogglePassword}>
                  {showPassword ? <img src={show} alt="Show Password" width='20px' height='20px' /> : <img src={hide} alt="Hide Password" width='20px' height='20px' />}
                </button>
              </div>

              <button type="submit" className="button-style">
                Submit
              </button>
            </form>
    </div>
  );
};

export default Registration;

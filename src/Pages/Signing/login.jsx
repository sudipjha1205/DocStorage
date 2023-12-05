import React, { useState } from "react";
import "./login.css"; // Ensure that your CSS file is correctly linked
import show from "../../Illustrations/show.png";
import hide from "../../Illustrations/hide.png";

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
        <h3>Login Form</h3>
            <form className="form-style">
              <label htmlFor="username" className="label-style">
                Email:
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

              <button type="submit" className="button-style">
                Login
              </button>
            </form>
    </div>
  );
};

export default Login;

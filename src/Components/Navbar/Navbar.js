import React from 'react';

import './Navbar.css';
import logo from "../../Assets/logo_croped.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" style={{ marginRight: '10px'}}/>
            <span className='company-name'>DOC STORAGE</span>
        </a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'beige' }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

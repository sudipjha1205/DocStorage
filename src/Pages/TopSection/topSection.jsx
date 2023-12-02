import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import logo from "../../Assets/logo_croped.png"
import './topsection.css';

const TopSection = () => {
    return(
        <div className='background-image'>
            <div className='topsection'>
                <div>
                    <div className="centered-logo">
                        <img src={logo} alt='' />
                    </div>
                    <div className='motto'>Everything in your pocket</div>
                    <div>
                        <button className='topsection-button'><a href='/signin'>Log In</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;
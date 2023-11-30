import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import TopSection from '../TopSection/topSection';
import ServiceSection from '../ServiceSection/serviceSection';

const HomePage = () => {
    return(
        <div>
            <Navbar />
            <TopSection />
            <ServiceSection />
        </div>
    )
}

export default HomePage;
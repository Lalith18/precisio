import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection.component';
import logo from '../../data/homepageLogo.png'

import './Homepage.styles.css'

const Homepage = () => {
    return (
        <div>
            <div className='home-logo' >
                <img className='home-logo-img' src={logo} alt='logo' />
            </div>
            <div className='video' />
            <AboutSection />
        </div>
    )
}

export default Homepage;
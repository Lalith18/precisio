import React from 'react';
import './Footer.styles.css'
import map from '../../data/map.JPG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className='footer'>
            <div>
                <h1 className='footer-header' ><br/>Team Precisio</h1>
                <div>
                    <a href="https://www.instagram.com/lalith_leftie/" rel="noreferrer" target="_blank"><button type="button" class="social-button"><FontAwesomeIcon icon={faLinkedin} /></button></a>
                    <a href="https://www.instagram.com/lalith_leftie/" rel="noreferrer" target="_blank"><button type="button" class="social-button"><FontAwesomeIcon icon={faInstagram} /></button></a>
                    <a href="https://www.instagram.com/lalith_leftie/" rel="noreferrer" target="_blank"><button type="button" class="social-button"><FontAwesomeIcon icon={faFacebookF} /></button></a>
                </div>
            </div>
            <div>
                <img className='map' src={map} alt='map' />
            </div>
            <div className='contact'>
                <h1 className='contact-header'><br/>Contact us</h1>
                <p className='contact-details'>sam@gmail.com<br />Ph.no: 9934567800<br />Ph.no: 8834567800</p>
            </div>
        </div>
)

export default Footer;
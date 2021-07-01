import React from 'react';
import './SponsorItem.css'

const SponsorItem = ({title, image}) => (
    <div className='sponsor-item' >
        <img className='sponsor-image' alt='sponsor' src={image} />
        <h1 className='sponsor-title'>{title}</h1>
    </div>
    
)

export default SponsorItem;
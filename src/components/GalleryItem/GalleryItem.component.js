import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import './GalleryItem.styles.css'

const GalleryItem = ({title, image}) => {
    const location = useLocation()
    const path = title.split(" ").join("")
    return (
        <Link to={`${location.pathname}/${path.toLowerCase()}`} >
            <div className='gallery-item' style={{backgroundImage: `url(${image})`}} >
                <h1 className='gallery-title'>{title}</h1>
            </div>
        </Link>
    )
}

export default GalleryItem;
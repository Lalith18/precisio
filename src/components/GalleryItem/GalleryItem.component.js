import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import './GalleryItem.styles.css'

const GalleryItem = ({title, image,id}) => {
    const location = useLocation()

    return (
        <Link to={`${location.pathname}/${id}`} >
            <div className='gallery-item' style={{backgroundImage: `url(${image})`}} >
                <h1 className='gallery-title'>{title}</h1>
            </div>
        </Link>
    )
}

export default GalleryItem;
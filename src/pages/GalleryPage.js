import React from 'react';
import './AllPage.styles.css'
import GalleryItem from '../components/GalleryItem/GalleryItem.component';
import GalleryData from '../data/gallery data/GalleryData';

const GalleryPage = () => (
    <div className='all-page'>
        {GalleryData.map((data, index) => <GalleryItem key={index} title={data.title} image={data.image} id={data.id} /> )}
    </div>
)

export default GalleryPage;
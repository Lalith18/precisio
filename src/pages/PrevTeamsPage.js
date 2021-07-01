import React from 'react';
import './AllPage.styles.css'
import ScrollToTop from '../components/ScrollToTop';
import GalleryItem from '../components/GalleryItem/GalleryItem.component';
import CompetitionsData from '../data/CompetitionsData';

const PrevTeamsPage = () => (
    <div className='all-page'>
        <ScrollToTop />
        {CompetitionsData.map((data, index) => <GalleryItem key={index} title={data.title} image={data.image} id={data.id} /> )}
    </div>
)

export default PrevTeamsPage;
import React from 'react';
import './AllPage.styles.css'
import SponsorItem from '../components/SponsorItem/SponsorItem'
import CompetitionsData from '../data/CompetitionsData';

const SponsorsPage = () => (
    <div className='all-page'>
        {CompetitionsData.map((data, index) => <SponsorItem key={index} title={data.title} image={data.image} /> )}
    </div>
)

export default SponsorsPage;
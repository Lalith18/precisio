import React from 'react';
import './CompetitionsPage.styles.css'
import CompetitionItem from '../components/CompetitionItem/CompetitionItem.component';
import CompetitionsData from '../data/CompetitionsData';

const CompetitionsPage = () => (
    <div className='competitions-page'>
        {CompetitionsData.map((data, index) => <CompetitionItem key={index} title={data.title} image={data.image} /> )}
    </div>
)

export default CompetitionsPage;
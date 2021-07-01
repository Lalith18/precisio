import React from 'react';
import './AllPage.styles.css'
import CompetitionItem from '../components/CompetitionItem/CompetitionItem.component';
import CompetitionsData from '../data/CompetitionsData';

const CompetitionsPage = () => (
    <div className='all-page'>
        {CompetitionsData.map((data, index) => <CompetitionItem key={index} id={data.id} title={data.title} image={data.image} /> )}
    </div>
)

export default CompetitionsPage;
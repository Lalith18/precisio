import React from 'react';
import './CompetitionItem.styles.css'

const CompetitionItem = ({title, image}) => (
    <div className='competition-item'>
        <img className='competition-preview' src={image} alt={title} />
        <h1 className='item-title'>{title}</h1>
    </div>
)

export default CompetitionItem;
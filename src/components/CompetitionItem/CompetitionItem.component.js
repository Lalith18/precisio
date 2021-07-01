import React from 'react';
import { Link } from 'react-router-dom';
import './CompetitionItem.styles.css'

const CompetitionItem = ({title, image, id}) => (
    <Link className='competition-link' to={`/competitions/${id}`}>
        <div className='competition-item' style={{backgroundImage: `url(${image})`}} >
            <h1 className='item-title'>{title}</h1>
        </div>
    </Link>
    
)

export default CompetitionItem;
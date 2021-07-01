import React from 'react'
import './competitions-overview.styles.css'
import { useParams } from 'react-router-dom'
import CompetitionsData from '../../data/CompetitionsData'
import ScrollToTop from '../ScrollToTop'

const CompetitionOverview = () => {
    const params = useParams()
    const data = CompetitionsData.filter(obj => obj.id === params.id)
    const competitionData = data[0]

    return(
        <div className='competition-overview'>
            <ScrollToTop />
            <h1 className='overview-title' >{competitionData.title}</h1>
            <img className='overview-image' src={competitionData.image} alt='competition' />
            <p className='competition-para'>{competitionData.content}</p>
        </div>
    )
}

export default CompetitionOverview
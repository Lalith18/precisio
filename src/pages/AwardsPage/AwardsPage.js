import React from 'react';
import './AwardsPage.styles.css';

const AwardsPage = () => {
    return (
        <div className='awards-page'>
            <div className='left-awards'>
                <div className='left-awards-container'>
                    <div>
                        <h1 className='award-year'>2018</h1>
                        <h1 className='award-title'>SGP ATV</h1>
                        <h1 className='award-position'>4th overall</h1>
                    </div>
                    <div className='award-vertical'></div>
                </div>
            </div>
            <div className='middle-line'></div>
            <div className='right-awards'>
            </div>
        </div>
    )
}

export default AwardsPage;
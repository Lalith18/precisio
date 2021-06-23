import React from 'react';
import './StyledButton.styles.css'

const StyledButton = ({text, onClick}) => (
    <button className='styled-button' onClick={onClick}>{text}</button>
) 

export default StyledButton;
import React,{useState} from 'react';
import team from '../../data/team.jpg'
import blog from '../../data/blog.svg'
import awards from '../../data/awards.svg'
import './AboutSection.styles.css'
import StyledButton from '../StyledButton/StyledButton.component'
import Modal from '../Modal/Modal.component';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const [showModal, setShowModal]= useState(false)

    const onClose = () => {
        setShowModal(false)
        document.body.style.overflow = 'unset'
    }

    const onSubmit = () => {
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }

    return(
    <React.Fragment>
    {showModal && <Modal onClose={onClose}/>}
    <div className='about-parent'>
        <div className='about-section'>
            <div className='about-text'>
                <h1 className='about-header'>Team Precisio</h1>
                <p className='about-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
            </div>
            <div className='about-image'>
                <img className='team-img' src={team} alt='team' />
            </div>
        </div>
        <div className='homepage-options'>
            <div className='homepage-op'>
                <Link to='/home/blogs' >
                    <img className='img-op' src={blog} alt='blog' />
                </Link>
                <h1 className='op-header blog'>BLOG</h1>
                <p className='op-para blog'> Articles from us</p>
            </div>
            <div className='homepage-op'>
                <Link to='/home/awards'>
                    <img className='img-op' src={awards} alt='awards' />
                </Link>
                <h1 className='op-header'>AWARDS</h1>
                <p className='op-para'> Achievements so far</p>
            </div>
        </div>
        <h1 className='about-sub-text'>Want to get updates of our activities?</h1>
        <StyledButton text="I'm in" onClick={onSubmit}/>    
    </div>
    </React.Fragment>
    )
}
export default AboutSection
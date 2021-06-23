import React from 'react';
import './Navbar.styles.css'
import logo from '../../data/logo.png'
import NavOption from '../NavOption/NavOption.component';

const Navbar = () => {
    return (
        <div className='nav'>
            <img className='nav-logo' src={logo} alt='Precisio' />
            <div className='nav-options'>
                <NavOption title='HOME' path='/'/>
                <NavOption title='COMPETITIONS' path='/competitions' />
                <NavOption title='TEAMS' path='/competitions' />
                <NavOption title='GALLERY' path='/competitions' />
                <NavOption title='SPONSORS' path='/competitions' />
            </div>
        </div>
    )
}

export default Navbar;
import React from 'react';
import './Navbar.styles.css'
import logo from '../../data/logo.png'
import NavOption from '../NavOption/NavOption.component';

const Navbar = () => {
    return (
        <div className='nav'>
            <img className='nav-logo' src={logo} alt='Precisio' />
            <div className='nav-options'>
                <NavOption title='HOME' path='/home'/>
                <NavOption title='COMPETITIONS' path='/competitions' />
                <NavOption title='TEAMS' path='/teams' />
                <NavOption title='GALLERY' path='/gallery' />
                <NavOption title='SPONSORS' path='/sponsors' />
            </div>
        </div>
    )
}

export default Navbar;
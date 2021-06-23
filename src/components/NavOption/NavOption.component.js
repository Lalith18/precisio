import React from 'react'
import './NavOption.styles.css'
import { NavLink } from 'react-router-dom'

const NavOption = ({title, path}) => {
    return(
        <div className='nav-option'>
            <NavLink exact activeClassName='active-nav-title' className='nav-title' to={path}>{title}</NavLink>
        </div>
    )
}

export default NavOption;
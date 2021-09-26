import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainNavigation.css'

const MainNavigation = () => {
    return (
        <header>
            <div className='logo'>Greate Quotes </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/quotes' >All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/quote/create'>New Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation

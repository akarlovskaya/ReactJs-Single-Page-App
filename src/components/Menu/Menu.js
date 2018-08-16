// Menu is stateless component - no need state and life-cycle hooks
import React from 'react';
// import react's Link component to prevent whole page reload, only rendered content will be changed
import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <header className="container">
            <nav>
                <ul className="nav">
                    <li className="nav-item"><NavLink to='/' activeClassName="active">Home</NavLink></li>
                    <li className="nav-item"><NavLink to='/speakers'>Speakers</NavLink></li>
                    <li className="nav-item"><NavLink to='/about'>About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;

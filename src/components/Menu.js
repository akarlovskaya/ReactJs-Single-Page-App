// Menu is stateless component - no need state and life-cycle hooks
import React from 'react';
// import react's Link component to prevent whole page reload, only rendered content will be changed
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/works'>Works</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Menu;

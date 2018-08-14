import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Speakers from './pages/Speakers';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Homepage</NavLink></li>
                        {/* <li><NavLink to='/articles'>Articles</NavLink></li> */}
                        <li><NavLink to='/speakers'>Speakers</NavLink></li>
                    </ul>
                </nav>
            </div>

        )
    }

}

export default Menu;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import Articles from './pages/Articles';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
// import articles from '../../articles-data';


class Content extends Component {
    render () {
        return (
            <div>

                <Route exact path='/' component={Home} />
                {/* <Route exact path='/home' component={Articles} /> */}
                <Route exact path='/speakers' component={Speakers} />
            </div>


        )
    }
}

export default Content;

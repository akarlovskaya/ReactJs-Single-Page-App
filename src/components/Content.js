import React from 'react';
// in Content component we define Routes to match the Links from Menu component
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';

const Content = () => {
    return(
        // use Switch component to group Route components
        <Switch>
            {/* Route component calls target component if path in prop matches */}
            {/* for Home route we use 'exact' prop to force Route to match exact pathname */}
            <Route exact path='/' component={Home} />
            <Route exact path='/works' component={Works} />
            <Route exact path='/about' component={About} />
        </Switch>
    );
}

export default Content;

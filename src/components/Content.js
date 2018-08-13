import React from 'react';
// in Content component we define Routes to match the Links from Menu component
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import About from './pages/About';

// https://reactjs.org/docs/faq-styling.html
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://robohash.org/

const Content = () => {
    return(
        // use Switch component to group Route components. It will iterate over Routes and render first one that matches current pathname
        <Switch>
            {/* Route component calls target component if path in prop matches */}
            {/* for Home route we use 'exact' prop to force Route to match exact pathname
                or  - '/works/featured' does not matches the path and won't render too
            */}
            <Route exact path='/' component={Home} />
            <Route exact path='/speakers' component={Speakers} />
            <Route exact path='/about' component={About} />
        </Switch>
    );
}

export default Content;

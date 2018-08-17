import React from 'react';
// in Content component we define Routes to match the Links from Menu component
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AllSpeakers from './AllSpeakers';
import Speaker from './Speaker/Speaker';

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
            <Route exact path='/home' component={Home} />
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/about' component={About} />
            <Route path='/speakers/:username' component={AllSpeakers} />
            <Route path='/speakers' component={AllSpeakers}/>

        </Switch>
    );
}

export default Content;

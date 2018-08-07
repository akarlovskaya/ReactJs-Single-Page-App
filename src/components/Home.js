import React from 'react';
// add react-transition-group module to animate the Route Transitions
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/home-style.css'

const Home = () => {
    return(
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div>
              <h1>Home</h1>
            </div>
        </CSSTransitionGroup>
    );
}

export default Home;

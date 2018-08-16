import React from 'react';
// add react-transition-group module to animate the Route Transitions
import { CSSTransitionGroup } from 'react-transition-group';
import '../../styles/home.css';
import ArticleList from '../ArticleList';
import Subscribe from '../Subscribe';
import articles from '../../articles-data.js';


const Home = () => {
    return(
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <div className="home">
              <main className="home__main">
                  <h1>Home</h1>
                  <ArticleList articles={articles} />
              </main>

              <aside className="home__aside">
                  <Subscribe />
              </aside>
            </div>
        </CSSTransitionGroup>
    );
}

export default Home;

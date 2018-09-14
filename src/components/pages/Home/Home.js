import React from 'react';
// add react-transition-group module to animate the Route Transitions
import { CSSTransitionGroup } from 'react-transition-group';
import '../../../styles/base.css';
import './home.css';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';
import ArticleList from '../../ArticleList';
import Subscribe from '../../Subscribe/Subscribe';
import articles from '../../../articles-data.js';
import Sponsors from '../../Sponsors/Sponsors';


const Home = () => {
    return(
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <Jumbotron />

            <div className="home container two-column">
              <main>
                  <h1>Our Latest News</h1>
                  <ArticleList articles={articles} />
              </main>

              <aside>
                  <Subscribe />
                  <Sponsors />
              </aside>
            </div>
        </CSSTransitionGroup>
    );
}

export default Home;

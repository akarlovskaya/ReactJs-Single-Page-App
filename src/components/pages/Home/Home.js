import React from 'react';
// add react-transition-group module to animate the Route Transitions
import { CSSTransitionGroup } from 'react-transition-group';
import './home.css';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';
import ArticleList from '../../ArticleList';
import Subscribe from '../../Subscribe';
import articles from '../../../articles-data.js';
// import AddComment from '../../AddComment';
import CommentList from '../../CommentList/CommentList';
import comments from '../../../comments-data.js';


const Home = () => {
    return(
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <Jumbotron />

            <div className="home container">
              <main className="home__main">
                  <h1>Our Latest News</h1>
                  <ArticleList articles={articles} />
                  {/* <AddComment /> */}
                  <CommentList comments={comments}/>
              </main>

              <aside className="home__aside">
                  <Subscribe />
              </aside>
            </div>
        </CSSTransitionGroup>
    );
}

export default Home;

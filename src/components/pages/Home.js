import React from 'react';
import Articles from '../Articles';
import articles from '../../articles-data';

const Home = () => (
    <div>
        <h1>Home page</h1>
        <Articles articles={articles}/>
    </div>
);

export default Home;

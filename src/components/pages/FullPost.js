import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import posts from '../../blogPosts-data.js';
import PropTypes from 'prop-types';
import Sponsors from '../Sponsors/Sponsors';
import '../../styles/base.css';

const FullPost = (props) => {
    const currentPostId = props.match.params.postUrl;
    const post = posts.filter(post => {
        return post.id == currentPostId;
    });
    const {date, title, body, image, largeImage} = post[0];

    const imgStyle = {
        borderRadius: '0',
        width: '100%',
        height: 'auto'
    }

    const navStyle = {
        margin: '20px 0'
    }

    return (
        <CSSTransitionGroup
            transitionName="homeTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <React.Fragment>
                <div>
                    <img style={imgStyle} src={largeImage} alt=""/>
                </div>
                <div className="container two-column">
                    <nav style={navStyle}>
                        <Link to='/blog'>Back</Link>
                    </nav>
                    <main>
                        <h1>{title}</h1>
                        <span>{date}</span>
                        <p>{body}</p>
                    </main>
                    <aside>
                        <Sponsors />
                    </aside>
                </div>
            </React.Fragment>
        </CSSTransitionGroup>
    );
}

export default FullPost;

FullPost.propTypes = {
    id: PropTypes.number
}

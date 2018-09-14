import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import FullPost from '../FullPost';

const Post = (props) => {
    // const postUrl = props.url.replace(/\s+/g, '-').toLowerCase();
    const id = props.id;
    return(
        <div className="blog-wrapper__content">
            <img src={props.image} alt=""/>
            <div className="blog-wrapper__text">
                <h2>{props.title}</h2>
                <span>{props.date}</span>
                <p>{props.body}...
                    {/* <Link to={`blog/${postUrl}`}>Read more</Link> */}
                    <Link to={`blog/${id}`}>Read more</Link>
                </p>
            </div>
        </div>
    );
}

export default Post;

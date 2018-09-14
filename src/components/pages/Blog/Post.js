import React, { Component } from 'react';

const Post = (props) => {

    return(
        <div className="blog-wrapper__content">
            <img src={props.image} alt=""/>
            <div className="blog-wrapper__text">
                <h2>{props.title}</h2>
                <span>{props.date}</span>
                <p>{props.body}...
                    <a href="">Read more</a>
                </p>
            </div>

        </div>
    );
}

export default Post;

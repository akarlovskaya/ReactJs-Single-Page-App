import React, { Component } from 'react';
import FancyWrapper from '../../FancyWrapper';
import Post from './Post';
import posts from '../../../blogPosts-data.js';
import './blog.css';

const Blog = () => {
    const postsData = posts.map(post => {
        return (
            <li key={post.id}>
                <Post
                    title={post.title}
                    date={post.date}
                    body={post.body}
                    image={post.image}
                />
            </li>
        );
    });

    return(
        <div className="container blog-wrapper">
            <FancyWrapper>
                <h1>Blog</h1>
            </FancyWrapper>

            <ul>
                { postsData }
            </ul>
        </div>
    );
}

export default Blog;

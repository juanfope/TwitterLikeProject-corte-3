import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'; 
import TweetForm from './TweetForm';
export default function Post() {
    return (
        <div className="posts-container">
            <div className="post">
                <h2>Post your thoughts</h2>          
            </div>
            <TweetForm /> 
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
    );
}

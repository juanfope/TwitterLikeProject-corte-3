import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MyPosts.css';
import { AuthContext } from './AuthContext';
import TweetItem from './TweetItem';

export default function MyPosts() {
    const { posts = [], username } = useContext(AuthContext);

    console.log('Current username:', username); // Añadir log aquí
    console.log('All posts:', posts); // Añadir log aquí

    const myPosts = posts.filter(post => post.username === username);
    
    console.log('My posts:', myPosts); // Añadir log aquí

    return (
        <div className="myposts-container">
            <h1>My Posts</h1>
            {myPosts.map((post, index) => (
                <TweetItem
                    key={index}
                    loggedInUser={username}
                    username={post.username}
                    tweetContent={post.tweetContent}
                />
            ))}
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
    );
}

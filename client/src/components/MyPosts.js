import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MyPosts.css';
import { AuthContext } from './AuthContext';
import TweetItem from './TweetItem';

export default function MyPosts() {
    const { posts = [], username } = useContext(AuthContext);

    console.log('Current username:', username); 
    console.log('All posts:', posts); 

    if (username === null) {
        console.error('Username is not defined');
        return (
            <div className="myposts-container">
                <h1>My Posts</h1>
                <p>User is not logged in or username is not set.</p>
                <Link to="/">
                    <button className="back-button">Back to Home</button>
                </Link>
            </div>
        );
    }

    if (!Array.isArray(posts)) {
        console.error('Posts is not an array');
        return (
            <div className="myposts-container">
                <h1>My Posts</h1>
                <p>Error fetching posts. Please try again later.</p>
                <Link to="/">
                    <button className="back-button">Back to Home</button>
                </Link>
            </div>
        );
    }

    const myPosts = posts.filter(post => post.username === username);

    console.log('My posts:', myPosts); // Log para depuración

    return (
        <div className="myposts-container">
            <h1>My Posts</h1>
            {myPosts.length === 0 && (
                <p>No posts found for the current user.</p>
            )}
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

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MyPosts.css';
import { AuthContext } from './AuthContext';

export default function MyPosts() {
    const { posts = [], username } = useContext(AuthContext);

    const myPosts = posts && posts.filter(post => post.username === username);

    return (
        <div className="myposts-container">
            <h1>My Posts</h1>
            {myPosts && myPosts.map((post, index) => (
                <div key={index} className="post">
                    <h2>{post.username}</h2>
                    <p>{post.content}</p>
                    <div className="post-footer">
                        <button className="like-button">Me gusta</button>
                        <button className="back-button">Compartir</button>
                    </div>
                </div>
            ))}
            <Link to="/tweetform">
                <button className="post-button">New Post</button>
            </Link>
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
    );
}

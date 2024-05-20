import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';
import { AuthContext } from './AuthContext';

export default function Feed() {
    const { posts = [] } = useContext(AuthContext);

    return (
        <div className="feed-container">
            <h1>Feed</h1>
            {posts && posts.map((post, index) => (
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
                <button className="back-button">Back to home</button>
            </Link>
        </div>
    );
}

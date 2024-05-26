import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './Feed.css';
import { AuthContext } from './AuthContext';
import TweetItem from './TweetItem';

const backendURL = 'https://serverdeploy-nine.vercel.app';

export default function Feed() {
    const { username, posts = [], deletePost } = useContext(AuthContext);

    const handleDelete = async (username, tweetContent) => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(`${backendURL}/deletePost`, {
                username,
                tweetContent
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                deletePost(username, tweetContent);
                alert('Post deleted successfully');
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="feed-container">
            <h1>Feed</h1>
            {posts && posts.map((post, index) => (
                <TweetItem
                    key={index}
                    loggedInUser={username}
                    username={post.username}
                    tweetContent={post.tweetContent}
                    onDelete={handleDelete}
                />
            ))}
            <Link to="/">
                <button className="back-button">Back to home</button>
            </Link>
        </div>
    );
}

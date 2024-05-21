
//under work
import React from 'react';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Posts.css';
import { AuthContext } from './AuthContext';

const backendURL = 'http://localhost:5000';

export default function Post() {
    const [postContent, setPostContent] = useState('');
    const { username, addPost } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            alert('You must be logged in to submit a post');
            return;
        }

        try {
            const response = await axios.post(`${backendURL}/submitPost`, {
                postContent,
                username
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                alert('Post submitted successfully');
                setPostContent('');
                addPost(response.data.post);
            } else {
                alert('Failed to submit post');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="posts-container">
            <h1>Post</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Write your post here..."
                    className="input-field"
                />
                <button type="submit" className="submit-button">Submit Post</button>
            </form>
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
    );
}

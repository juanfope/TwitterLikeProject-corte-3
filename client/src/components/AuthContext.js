import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const backendURL = 'http://localhost:5000';

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        if (token && storedUsername) {
            axios.get(`${backendURL}/auth/check`, {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(response => {
                if (response.data.success) {
                    setIsAuthenticated(true);
                    setUsername(storedUsername);
                } else {
                    setIsAuthenticated(false);
                    setUsername(null);
                }
            }).catch(() => {
                setIsAuthenticated(false);
                setUsername(null);
            });
        }

        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get(`${backendURL}/posts`).then(response => {
            setPosts(response.data);
        }).catch(error => {
            console.error('Error fetching posts:', error);
        });
    };

    const addPost = (newPost) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    const deletePost = (username, tweetContent) => {
        setPosts(prevPosts => prevPosts.filter(post => !(post.username === username && post.tweetContent === tweetContent)));
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsAuthenticated(false);
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, setUsername, posts, addPost, deletePost, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

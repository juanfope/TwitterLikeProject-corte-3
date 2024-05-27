import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const backendURL = 'https://serverfinaldeploy.vercel.app';

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        console.log('Stored username from localStorage:', storedUsername);

        if (token && storedUsername) {
            axios.get(`${backendURL}/auth/check`, {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(response => {
                if (response.data.success) {
                    console.log('User authenticated:', storedUsername);
                    setIsAuthenticated(true);
                    setUsername(storedUsername);
                    console.log('Username set to:', storedUsername);
                } else {
                    console.log('Authentication failed');
                    setIsAuthenticated(false);
                    setUsername(null);
                }
            }).catch(error => {
                console.error('Error during auth check:', error);
                setIsAuthenticated(false);
                setUsername(null);
            });
        } else {
            console.log('No token or username found in localStorage');
            setIsAuthenticated(false);
            setUsername(null);
        }

        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get(`${backendURL}/posts`).then(response => {
            setPosts(response.data);
            console.log('Posts fetched:', response.data); // Log para depuración
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

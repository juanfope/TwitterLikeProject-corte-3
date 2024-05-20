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
                    setUsername(storedUsername); // Establece el nombre de usuario desde el almacenamiento local
                } else {
                    setIsAuthenticated(false);
                    setUsername(null);
                }
            }).catch(() => {
                setIsAuthenticated(false);
                setUsername(null);
            });
        }

        fetchPosts(); // Llama a la función para obtener los posts cuando se monta el componente
    }, []);

    const fetchPosts = () => {
        axios.get(`${backendURL}/posts`).then(response => {
            setPosts(response.data);
        }).catch(error => {
            console.error('Error fetching posts:', error);
        });
    };

    const addPost = (newPost) => {
        axios.post(`${backendURL}/post`, newPost)
            .then(response => {
                if (response.data.success) {
                    setPosts(prevPosts => [newPost, ...prevPosts]);
                    alert('Post added successfully');
                } else {
                    alert('Failed to add post');
                }
            })
            .catch(error => {
                console.error('Error adding post:', error);
                alert('An error occurred while adding the post. Please try again.');
            });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, username, setUsername, posts, addPost }}>
            {children}
        </AuthContext.Provider>
    );
};

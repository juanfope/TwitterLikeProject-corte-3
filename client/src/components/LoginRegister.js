import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './LoginRegister.css';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const backendURL = 'https://serverdeploy-nine.vercel.app';

function LoginRegister() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, setIsAuthenticated, setUsername: setGlobalUsername } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${backendURL}/login`, {
                username,
                password
            });

            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.username); // Guardar username en localStorage
                setIsAuthenticated(true);
                setGlobalUsername(response.data.username); // Establecer username en AuthContext
                alert('Login successful!');
            } else {
                alert('Login failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login-register-container">
            <h2>Login page</h2>
            <form id="loginForm" onSubmit={handleLogin}>
                <input
                    id="userLogin"
                    type="text"
                    placeholder="Username"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    id="passwordLogin"
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <p>Not registered yet? Click on the button below to create your account</p>
            <Link to="/onlyregister">
                <button className="back-button">Register</button>
            </Link>
            <Link to="/">
                <button className="back-button">Back to home</button>
            </Link>
        </div>
    );
}

export default LoginRegister;

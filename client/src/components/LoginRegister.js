import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';
import axios from 'axios';

const backendURL = 'http://localhost:5000';

function LoginRegister() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${backendURL}/login`, {
                username,
                password
            });

            if (response.data.success) {
                alert('Login successful!');
            } else {
                alert('Login failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-register-container">
            <h2>Login page</h2>
            <form id='loginForm' onSubmit={handleLogin}>
                <input
                    id='userLogin'
                    type="text"
                    placeholder="Email direction"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    id='passwordLogin'
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className="login-button">Login</button>
            </form>
            <p>Not registered yet? click on the button below to create your account</p>
            <Link to="/onlyregister">
                <button className="back-button">Register</button>
            </Link>
            <Link to="/">
<<<<<<< HEAD
                <button className="back-button">Back to home</button>
=======
                <button className="back-button">Back to Home</button>
>>>>>>> 3760c21dfe3e3c681ba1375ce96f5c1ccf1098b5
            </Link>
        </div>
    );
}

export default LoginRegister;

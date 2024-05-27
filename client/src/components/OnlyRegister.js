import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';
import axios from 'axios';

const backendURL = 'https://serverfinaldeploy.vercel.app';

function OnlyRegister() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address that contains "@" and ".com"');
            return;
        }

        try {
            const response = await axios.post(`${backendURL}/onlyregister`, {
                email,
                username,
                password
            });

            if (response.data.success) {
                alert('Registration successful!');
            } else {
                alert('Registration failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-register-container">
            <h2>Registration page</h2>
            <form id='registerForm' onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    className="input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className="login-button">Register</button>
            </form>
            <p>Already registered? Click on the button below to login</p>
            <Link to="/LoginRegister">
                <button className="back-button">Login</button>
            </Link>
            <Link to="/">
                <button className="back-button">Back to home</button>
            </Link>
        </div>
    );
}

export default OnlyRegister;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css'; 

function LoginRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/loginregister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                console.log('Token recibido:', token);
            } else {
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <div className="login-register-container">
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
            />
            <button onClick={handleLogin} className="login-button">Iniciar Sesión</button>
            <Link to="/">
                <button className="back-button">Volver</button>
            </Link>
        </div>
    );
}

export default LoginRegister;

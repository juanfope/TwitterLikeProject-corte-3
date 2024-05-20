import React, { useContext } from 'react';
import './Identificacion.css';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';

function Identificacion() {
    const { username } = useContext(AuthContext);

    return (
        <div className="identificacion-container">
            <h2>Welcome, {username}!</h2>
            <p>You are now identified.</p>
            <Link to="/">
                <button className="back-button">Back to menu</button>
            </Link>
        </div>
    );
}

export default Identificacion;

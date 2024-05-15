// Feed.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';

export default function Feed() {
    return (
        <div className="feed-container">
            <h1>Feed</h1>
            {/* Aquí van las publicaciones */}
            <div className="post">
                <h2>Titulo de la Publicación</h2>
                <p>Contenido de la publicación...</p>
                <div className="post-footer">
                    <button className="like-button">Me gusta</button>
                    <button className="back-button">Compartir</button>
                </div>
            </div>
            <div className="post">
                <h2>Otra Publicación</h2>
                <p>Contenido de la otra publicación...</p>
                <div className="post-footer">
                    <button className="like-button">Me gusta</button>
                    <button className="back-button">Compartir</button>
                </div>
            </div>
            <Link to="/">
                <button className="back-button">Back to home</button>
            </Link>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'; 
export default function Post() {
    return (
        <div className="posts-container">
            <h1>Post</h1>
            {/* Aquí va el componente para visualizar un post */}
            <div className="post">
                <h2>Título del Post</h2>
                <p>Contenido del Post</p>
            </div>
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
    );
}

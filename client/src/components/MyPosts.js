import React from 'react';
import { Link } from 'react-router-dom';
import './MyPosts.css'; 

export default function MyPosts() {
    return (
        <div className="myposts-container">
            <h1>My Posts</h1>
            {/* Aquí va el formulario para crear posts */}
            <form className="post-form">
                <textarea placeholder="Escribe tu post aquí..." rows="4" cols="50"></textarea>
                <button type="submit">Publicar</button>
            </form>
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
    );
}
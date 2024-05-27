import React, { useState } from 'react';
import './TweetForm.css';
import axios from 'axios';

const backendURL = 'https://serverfinaldeploy.vercel.app';

export default function TweetForm() {
    const [content, setContent] = useState('');

    const handlePost = async (event) => {
        event.preventDefault();

        try {
            console.log("Content:", content);
            const response = await axios.post(`${backendURL}/submitPost`, {
                postContent: content
            });

            console.log("Response:", response);

            if (response.data.success) {
                alert('Post successfully done');
            }

        } catch (error) {
            console.error('Error:', error.response); // Modificado para imprimir el error.response
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handlePost}>
            <div className="PostArea">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's happening"
                />
                <button type='submit'>Post</button>
            </div>
        </form>
    )
}

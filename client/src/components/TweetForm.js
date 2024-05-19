import React, { useState } from 'react';
import './TweetForm.css';
import axios from 'axios';

const backendURL = 'https://protectedroutesversion2server.vercel.app';
//const backendURL = 'http://localhost:5000';

export default function TweetForm(){
    const [content, setContent] = useState('');

    const handlePost = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${backendURL}/post`, {
                content
            });

            if (response.data.success) {
                alert('Post succesfully done');
            }
            
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return(
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
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function TweetItem({ loggedInUser, username, tweetContent }) {
    const { deletePost } = useContext(AuthContext);

    const handleDelete = () => {
        deletePost(username, tweetContent);
    };

    return (
        <div className="tweet-item">
            <p><strong>{username}</strong>: {tweetContent}</p>
            {loggedInUser === username && (
                <button onClick={handleDelete}>Delete</button>
            )}
        </div>
    );
}

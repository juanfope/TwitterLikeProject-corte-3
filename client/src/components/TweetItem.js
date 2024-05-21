import React from 'react';

export default function TweetItem({ loggedInUser, username, tweetContent, onDelete }) {
    const handleDelete = () => {
        onDelete(username, tweetContent);
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

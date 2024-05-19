import React from 'react';
import meme1 from '../memes/meme1.jpg'
import meme2 from '../memes/meme2.png'
import meme3 from '../memes/meme3.jpg'
import meme4 from '../memes/meme4.jpg'
import meme5 from '../memes/meme5.jpg'
import meme6 from '../memes/meme6.png'
import meme9 from '../memes/meme9.jpg'
import meme10 from '../memes/meme10.jpg'
import { Link } from 'react-router-dom'
import './DailyMeme.css';

const memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme9, meme10];

export default function DailyMeme(){
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];

    return(
        <>
        <div>
            <h2>Meme of the day ;b</h2>
            <div className='memeContainer'>
                <img src={randomMeme} alt='Random Meme' />
            </div>
            <Link to="/">
                <button className="back-button">Back to Home</button>
            </Link>
        </div>
        </>
    )
}
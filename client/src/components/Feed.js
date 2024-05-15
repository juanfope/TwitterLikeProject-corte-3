import { Link } from 'react-router-dom'

export default function Feed(){
    return(
        <>
        <h1>Feed</h1>
        <Link to="/">
            <button>Back to home</button>
        </Link>
        </>
    )
}
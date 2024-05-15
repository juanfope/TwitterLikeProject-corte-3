import { Link } from 'react-router-dom'
export default function MyPosts(){
    return(
        <>
        <h1>MyPosts</h1>
        <Link to="/">
            <button>Back to home</button>
        </Link>
        </>
    )
}
import { Link } from 'react-router-dom'
export default function Post(){
    return(
        <>
        <h1>Post</h1>
        <Link to="/">
            <button>Back to home</button>
        </Link>
        </>
    )
}
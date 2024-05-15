import { Link } from 'react-router-dom';
export default function OnlyRegister() {
    return ( 
        <Link to="/">
            <button className="back-button">Back to home</button>
        </Link>        
    );
}
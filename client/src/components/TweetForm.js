import './TweetForm.css';

export default function TweetForm(){
    return(
        <form>
            <div className="PostArea">
                <textarea placeholder="What's happening"></textarea>
                <button>Post</button>
            </div>
        </form>
    )
}
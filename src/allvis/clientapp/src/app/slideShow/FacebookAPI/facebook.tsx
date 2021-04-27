import { useState, useEffect } from 'react'
import IFacebookDto  from './IFacebookDto';
import { RiFacebookCircleFill } from "react-icons/ri";

export const Facebook = () => {
    
    const [time, setTime] = useState<number>()
    const [posts, setPosts] = useState<IFacebookDto []>([])
    
    useEffect(() => {
        getTweets()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getTweets = async () => {
        const apiCall = await fetch('api/Facebook')
        const response = await apiCall.json();
        setPosts(response)
        console.log(response)
    }
    
    return(
    <ol>
        {posts.map(post => (
            
            <div >
                <p>{post.message}</p>
                {post.full_picture ? <img src={post.full_picture} alt='???' /> : null}
                <h1><p><RiFacebookCircleFill />This post is from Facebook</p></h1>  
            </div>
        
        ))}

    </ol>
    )
}

import { useState, useEffect } from 'react'
import IFacebookDto  from './IFacebookDto';
import { RiFacebookCircleFill } from "react-icons/ri";
import styles from '../../API/API.module.scss'

export const Facebook = () => {
    
    const [time, setTime] = useState<number>()
    const [posts, setPosts] = useState<IFacebookDto []>([])
    
    useEffect(() => {
        getPosts()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getPosts = async () => {
        const apiCall = await fetch('api/Facebook')
        const response = await apiCall.json();
        setPosts(response)
        console.log(response)
    }
    
    return(
    <ol className={(styles.ol)}>
        {posts.map(post => (
            
            <div className={(styles.APIbox)}>
                <p>{post.message}</p>
                {post.full_picture ? <img src={post.full_picture} alt='???' /> : null}
                <h1><p><RiFacebookCircleFill />This post is from Facebook</p></h1>  
            </div>
        
        ))}

    </ol>
    )
}





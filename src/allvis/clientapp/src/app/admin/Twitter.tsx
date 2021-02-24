import { useState, useEffect } from 'react'
import ITwitterDto from './ITwitterDto';
import ReactPlayer from 'react-player'
import styles from './AdminShell.module.scss'
import { AiFillTwitterCircle } from "react-icons/ai";


export const Twitter = () => {
    
    const [time, setTime] = useState<number>()
    const [tweets, setTweets] = useState<ITwitterDto>()
    
    useEffect(() => {
        getTweets()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getTweets = async () => {
        const apiCall = await fetch('api/Twitter')
        const response = await apiCall.json();
        setTweets(response)
        console.log(tweets)
    }
    

    return( 
        <div>
            <p>{tweets?.text}</p>
            <br/>
            <br/>
            <img src = {tweets?.medium} alt= {tweets?.type}/>
            <h1>
                <p><AiFillTwitterCircle />This post is from Twitter </p>
            </h1>
        </div>
    )
}
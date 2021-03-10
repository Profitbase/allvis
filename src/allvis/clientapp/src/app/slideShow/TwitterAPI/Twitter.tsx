import { useState, useEffect } from 'react'
import ITwitterDto from './ITwitterDto';
import styles from './Twitter.module.scss'
import { AiFillTwitterCircle } from "react-icons/ai";
import cx from "classnames"

export const Twitter = () => {
    
    const [time, setTime] = useState<number>()
    const [tweets, setTweets] = useState<ITwitterDto []>([])
    
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
        console.log(response)
    }
    
    return(
    <ol className={cx(styles.ol)}>
        {tweets.map(tweet => (
            
            <div className={cx(styles.twitter)}>
                <p>{tweet.text}</p>
                <img src={tweet.medium}></img>
                <h1><p><AiFillTwitterCircle />This post is from Twitter </p></h1>
               
            </div>
        
        ))}

    </ol>
    )
}

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
    

<<<<<<< HEAD
    return(
    <ol>
        {tweets.map(tweet => (
            <div className={cx(styles.twitter, styles.pa)}>
                <p>{tweet.text}</p>
                <p><img src= {tweet.medium} alt = "" /></p>
                <h1><p><AiFillTwitterCircle />This post is from Twitter </p></h1>
            </div>
        ))}

    </ol>
=======
    return( 
        <div className={cx(styles.twitter, styles.padding)}>
            <p>{tweets?.text}</p>
            <br/>
            <br/>
            <img src = {tweets?.medium} alt= {tweets?.type}/>
            <h1>
                <p><AiFillTwitterCircle />This post is from Twitter </p>
            </h1>
>>>>>>> 1836a3e3b03c8736ff6104352e7c576cadc61f2f

    )
}
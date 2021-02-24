import { useState, useEffect } from 'react'
import ITwitterDto from './ITwitterDto';
import styles from './AdminShell.module.scss'
import cx from "classnames"

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
        <div className={cx(styles.twitter, styles.padding)}>
            {tweets?.text}
        </div>
    )
}
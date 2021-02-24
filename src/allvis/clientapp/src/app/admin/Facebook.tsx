import { useState, useEffect } from 'react'
import IFacebookDto from './IFacebookDto';
import styles from './AdminShell.module.scss'
import cx from "classnames"


export const Facebook = () => {
    
    const [time, setTime] = useState<number>()
    const [tweets, setTweets] = useState<IFacebookDto>()
    
    useEffect(() => {
        getTweets()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getTweets = async () => {
        const apiCall = await fetch('api/Facebook')
        const response = await apiCall.json();
        setTweets(response)
        console.log(tweets)
    }
    

    return( 
        <div className={cx(styles.twitter, styles.padding)}>
            {tweets?.tekst}
        </div>
    )
} 
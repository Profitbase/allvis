import { useState, useEffect } from 'react'
import ILinkdinDto from './IDatabaseDto';
import styles from "../slideShow/TwitterAPI/Twitter.module.scss"
import cx from "classnames"



export const Linkdin = () => {
    
    const [time, setTime] = useState<number>()
    const [tweets, setTweets] = useState<ILinkdinDto>()
    
    useEffect(() => {
        getTweets()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getTweets = async () => {
        const apiCall = await fetch('api/Linkdin')
        .then(respons => {
            console.log(respons);
            console.log(tweets)
        })
    }
    

    return( 
        <div className={cx(styles.twitter, styles.pa)}>
            <p>{tweets?.lunchMonday}</p>
           

        </div>
    )
}
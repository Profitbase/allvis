import { useState, useEffect } from 'react'
import IFacebookDto from './IFacebookDto';
import styles from './AdminShell.module.scss'
import cx from "classnames"

export const Facebook = () => {
    
    const [time, setTime] = useState<number>()
    const [feed, setFeed] = useState<IFacebookDto>()
    
    useEffect(() => {
        getFeed()
        setInterval(() => {
            setTime(Date.now())
        }, 72000 );
    }, []);


    const getFeed = async () => {
        const apiCall = await fetch('api/Facebook')
        const respons = await apiCall.json();
        setFeed(respons)
        console.log(feed)
    }

    return( 
        <div className={cx(styles.facebook, styles.padding)}>
            {feed?.tekst}
        </div>
    )
}
import { useState, useEffect } from 'react'
import ITwitterDto from './ITwitterDto';

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
            {tweets?.text}
        </div>
    )
}
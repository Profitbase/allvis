import { useState, useEffect } from 'react'
import cx from 'classnames'
import ILinkdinDto from './ILinkdinDto';

export const Linkdin = () => {
    
    const [time, setTime] = useState<number>()
    const [timeline, setLinkdin] = useState<ILinkdinDto>()
    
    useEffect(() => {
        getLinkdin()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getLinkdin = async () => {
        const apiCall = await fetch('api/Linkdin')
        const response = await apiCall.json();
        setLinkdin(response)
        console.log(timeline);
    }
    return( 
        <div>
            <p>{timeline?.text}</p>
        </div>
    )
}
import { useState, useEffect } from 'react'
import styles from './Twitter.module.scss'
import { AiFillTwitterCircle } from "react-icons/ai";
import cx from "classnames"



export const Linkdin = () => {
    
    const [time, setTime] = useState<number>()
    const [post, setPost] = useState<string>()
    
    useEffect(() => {
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getPost = async () => {
        setPost("6780911413587148800");
    };

    return(
    <div>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6780911413587148800" height="844" width="504" frameBorder="0" title="Innebygd innlegg"></iframe>
    </div>
    )
}
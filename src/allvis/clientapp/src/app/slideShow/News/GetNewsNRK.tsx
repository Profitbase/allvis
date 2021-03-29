import * as React from 'react'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import INewsNrkDto from './INewsNrkDto'
import NewsSources from './NewsSources'
import styles from "./news.module.scss"
import { url } from 'inspector'

interface INewsProps{
    kanal: NewsSources
}

export const NewsNRK = (props: INewsProps) => {

    const [time, setTime] = useState<number>()
    const [news, setNews] = useState<INewsNrkDto[]>([])

    useEffect(() => {
        getNews()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getNews = async () => {
        const apiCall = await fetch(`api/NewsNrk?source=${props.kanal}`);
        const response = await apiCall.json();
        setNews(response)
    }

    return(
        <div>
            <ol className={cx(styles.ol)}>
                {news.map(n => (
                    <div className={cx(styles.StyleNews)}>
                        <h1>{n.title}</h1>
                        <p>{n.description}</p>
                        <img src= {n.url}></img>
                        <p>{n.url}</p>
                       
                    </div>
                ))}
            </ol>
        </div>
    )
}
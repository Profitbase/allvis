import * as React from 'react'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import INewsDto from './INewsVGogE24Dto'
import NewsSources from './NewsSources'

interface INewsProps{
    kanal: NewsSources
}

export const NewsVGOgE24 = (props: INewsProps) => {

    const [time, setTime] = useState<number>()
    const [news, setNews] = useState<INewsDto[]>([])

    useEffect(() => {
        getNews()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getNews = async () => {
        const apiCall = await fetch(`api/NewsVGOgE24?source=${props.kanal}`);
        const response = await apiCall.json();
        setNews(response)
    }

    return(
        <div>
            <ol>
                {news.map(n => (
                    <div>
                        <h1>{n.title}</h1>
                        <p>{n.description}</p>
                        <p><img src= {n.image} alt = ""  width = "300"/></p>
                    </div>
                ))}
            </ol>
        </div>
    )
}
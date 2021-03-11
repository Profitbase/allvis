import * as React from 'react'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import INewsE24Dto from './INewsE24Dto';

export const E24BorsOgFinans = () => {

    const [time, setTime] = useState<number>()
    const [News, setNews] = useState<INewsE24Dto []>([])

    useEffect(() => {
        getNews()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getNews = async () => {
        const apiCall = await fetch('api/NewsE24BorsOgFinans')
        const response = await apiCall.json();
        console.log(response)
        setNews(response)
    }

    return(

        <div>
            <ol>
                {News.map(News => (
                    <div>
                        <h1>{News.title}</h1>
                        <p>{News.description}</p>
                        <p>{News.category}</p>
                        <p><img src= {News.image} alt = ""  width = "300"/></p>
                    </div>
                ))}
            </ol>
        </div>
    )
}
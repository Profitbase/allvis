import * as React from 'react'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import INewsNrk from './INewsNrkDto'

export const NrkSport = () => {

    const [time, setTime] = useState<number>()
    const [News, setNews] = useState<INewsNrk[]>([])

    useEffect(() => {
        getNews()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getNews = async () => {
        const apiCall = await fetch('api/NewsNrkSport')
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
                        <p><img src= {News.url} alt = ""  width = "300"/></p>
                    </div>
                ))}
            </ol>
        </div>
    )
}
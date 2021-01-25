import * as React from 'react'
import styles from './InformationboardShell.module.scss'
import { InformationWeather } from './InformationWeather';
import { InformationLunch } from './InformationLunch'
import cx, { constructor } from 'classnames'
import { useState } from 'react';

const APIkeyWeather = "2415429dfc79476199e3af0f3dd84644"

//api call api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

export const Informationboard = () => {
    
    const [descriptionWeather, setDescriptionWeather] = useState(' ')
    const [tempratureWeather, setTempratureWeather] = useState (' ')
    const [iconWeather, setIconWeather] = useState(' ')

    const getWeather =async() => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stavanger,no&appid=${APIkeyWeather}`)
        const response = await api_call.json();
        console.log(response)
    }
    return(
        <div className={cx(styles.informationboard)}>    
           <InformationWeather/>
            <p>&amp;</p>
            <InformationLunch />
        </div>
    )
}


import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'
import "weather-icons/css/weather-icons.css";
import IWeather from './IWeatherDto';

export const Weather = () => {
    
    const [time, setTime] = useState<number>()
    const [weather, setWeather] = useState<IWeather>()
    
    useEffect(() => {
        getWeather()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getWeather = async () => {
        const apiCall = await fetch('api/Weather')
        const response = await apiCall.json();
        setWeather(response)
    }
    

    return( 
        <div className={cx (styles.weatherinfo)}>
            <p><i className={`wi ${weather?.icon}`}></i>  {weather?.description}, {weather?.temperature}&#8451;</p>
        </div>
    )
}
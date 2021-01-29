import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'

export const Weather = () => {

    const API_key = "9b8ce979413024c433f966e90356148d"

    const [tempratureWeather, setTempratureWeather] = useState(Number);
    const [descriptionWeather, setdescriptionWeather] = useState(' ')
    
    useEffect(() => {
        getWeather()
    });

    const getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stavanger,No&appid=${API_key}`)
        const response = await api_call.json();

        let temprature = Math.floor(response.main.temp - 273.15) 
        let description = response.weather[0].description

        setTempratureWeather(temprature)
        setdescriptionWeather(description)
        
    }

    return( 
        <div className={cx (styles.weatherinfo)}>
            <p><i className="wi wi-day-sunny"></i>It is {descriptionWeather} and {tempratureWeather}&#8451; outside.</p>
        </div>
    )
}
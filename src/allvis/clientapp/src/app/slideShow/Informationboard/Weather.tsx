import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'
import "weather-icons/css/weather-icons.css";

export const Weather = () => {

    const API_key = "9b8ce979413024c433f966e90356148d"

    const [time, setTime] = useState<number>()
    const [tempratureWeather, setTempratureWeather] = useState<number>();
    const [descriptionWeather, setdescriptionWeather] = useState<string>();
    const [icon, setIcon] = useState<string>();
    const [rangeId, setRangeId] = useState<number>(0)
    const weatherIcons = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    };
    
    useEffect(() => {
        getWeather()
        getWeatherIcon(rangeId)
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stavanger,No&appid=${API_key}`)
        const response = await api_call.json();

        let temprature = Math.floor(response.main.temp - 273.15) 
        let description = response.weather[0].description
        let rangeId = response.weather[0].id

        setTempratureWeather(temprature)
        setdescriptionWeather(description)
        setRangeId(rangeId)
    }
    
    const getWeatherIcon = (rangeId: number) => {
        switch (true) {
          case rangeId >= 200 && rangeId < 232:
            setIcon( weatherIcons.Thunderstorm);
            break;
          case rangeId >= 300 && rangeId <= 321:
            setIcon( weatherIcons.Drizzle);
            break;
          case rangeId >= 500 && rangeId <= 521:
            setIcon( weatherIcons.Rain);
            break;
          case rangeId >= 600 && rangeId <= 622:
            setIcon( weatherIcons.Snow);
            break;
          case rangeId >= 701 && rangeId <= 781:
            setIcon( weatherIcons.Atmosphere);
            break;
          case rangeId === 800:
            setIcon( weatherIcons.Clear);
            break;
          case rangeId >= 801 && rangeId <= 804:
            setIcon( weatherIcons.Clouds);
            break;
          default:
            setIcon( weatherIcons.Clouds);
        }
      }

    return( 
        <div className={cx (styles.weatherinfo)}>
            <p><i className={`wi ${icon}`}></i>  {descriptionWeather}, {tempratureWeather}&#8451;</p>
        </div>
    )
}
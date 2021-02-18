import styles from './Informationboard.module.scss'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from "react-icons/ai";



export const DateComponent = () => {

    const [date, setDate] = useState<string>()
    const [time, setTime] = useState<string>()
    
    useEffect (() => {
        setInterval(() => {
            dateBuilder()
        }, 1000);
    }, [])
      
    const dateBuilder = () => {
        const event = new Date()
        const date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const time = {hour: 'numeric', minute: 'numeric'}

        setDate(event.toLocaleDateString(undefined, date))
        setTime(event.toLocaleTimeString(undefined, time))
    }

    return(
    <div>
        <div className={cx (styles.dateinfo)}>
            <p> <FaRegCalendarAlt /> {date}</p>
        </div>
        <br />
        <div className={cx (styles.clock)}>
            <p> <AiOutlineClockCircle /> {time}</p>
        </div>
    </div>
    )
}


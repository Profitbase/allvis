import styles from './Informationboard.module.scss'
import cx from 'classnames'
import { useState, useEffect } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';



export const DateComponent = () => {

    const [day, setDay] = useState<string>()
    const [date, setDate] = useState<string>()
    const [month, setMonth] = useState<string>()
    const [year, setYear] = useState<string>()
    const [hour, setHour] = useState<string>()
    const [minute, setMinute] = useState<string>()
    
    useEffect (() => {
        setInterval(() => {
            dateBuilder(new Date())
        }, 1000);
    }, [])

    
      
    const dateBuilder = (d: Date) => {
        let day = d.toLocaleString("default", { weekday: "long" })
        let date = d.toLocaleDateString("default", {day: 'numeric'})
        let month = d.toLocaleString("default", { month: 'long' })
        let year = d.toLocaleString("default", { year: 'numeric'});
        let hour = d.toLocaleTimeString("default", {hour: 'numeric'})
        let minutes = d.toLocaleTimeString("default", {minute: 'numeric'})

        setDay(day)
        setDate(date)
        setMonth(month)
        setYear(year)
        setHour(hour)
        setMinute(minutes)

    }

    return(
    <div>
        <div className={cx (styles.dateinfo)}>
            <p> <FaRegCalendarAlt /> {day} {date}{month}.{year}</p>
        </div>
        <div className={cx (styles.clock)}>
            <p>{hour}:{minute}</p>
        </div>
    </div>
    )
}


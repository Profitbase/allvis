import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'
import { ImSpoonKnife } from "react-icons/im";

export const Lunch = () => {

    const [weekday, setWeekday] = useState<string>()
    const [lunch, setLunch] = useState([String])

    const getTheWeeksLunch = async () => {
        const apiCall = await fetch('api/Lunch')
        const response = await apiCall.json();
        setLunch(response)
    }
    
    const getTodaysWeekday = async () => {

        const event = new Date()
        const weekday = {weekday: 'long'}

        setWeekday(event.toLocaleDateString(undefined, weekday))
    }
    

    return(
    <div className={cx (styles.lunchinfo)}>
        <p> <ImSpoonKnife /> Taco</p>
     </div>
    )
}
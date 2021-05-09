import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames';
import { ImSpoonKnife } from "react-icons/im";

export const Lunch = () => {

    const [lunch, setLunch] = useState<string>()
    const [time, setTime] = useState<number>()
    
    useEffect(() => {
        getTodaysLunch()
        setInterval(() => {
            setTime(Date.now())
        }, 7200000 );
    }, []);

    const getTodaysLunch = async () => {
        const apiCall = await fetch('api/Lunch')
        const response = await apiCall.text();
        setLunch(response)
        console.log(response)
    }

    return(
    <div className={cx (styles.lunchinfo)}>
        <p> <ImSpoonKnife /> {lunch} </p>
     </div>
    )
}
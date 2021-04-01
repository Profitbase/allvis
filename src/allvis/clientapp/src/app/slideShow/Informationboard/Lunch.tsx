import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'
import { ImSpoonKnife } from "react-icons/im";

export const Lunch = () => {

    const [lunch, setLunch] = useState<string>()

    useEffect (() => {
        setInterval(() => {
            getTodaysLunch()
        }, 1000);
    }, [])

    const getTodaysLunch = async () => {
        const dateObj = new Date()
        var weekday = dateObj.getDay()

        switch(true) {
            case weekday === 1:
                setLunch('pizza')
                break;
            case weekday === 2:
                setLunch('taco')
                break;
            case weekday === 3:
                setLunch('Hamburger')
                break;
            case weekday === 4:
                setLunch('Pølse')
                break;
            case weekday === 5:
                setLunch('Lasagne og kake')
                break;
            default:
                setLunch('Det er helg og kantinen er ikke åpen')
                break;
        }
    }

    return(
    <div className={cx (styles.lunchinfo)}>
        <p> <ImSpoonKnife /> {lunch} </p>
     </div>
    )
}


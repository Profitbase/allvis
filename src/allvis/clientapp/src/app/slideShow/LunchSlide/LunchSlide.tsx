import { useState, useEffect } from 'react'
import cx from "classnames"
import styles from './LunchSlide.module.scss'



export const LunchSlide = () => {
    
    return(
        <ul className={cx(styles.lunch, styles.pa)}>
            <li>Mandag: Hamburger</li>
            <li>Tirsdag: Pizza</li>
            <li>Onsdag: Pølser</li>
            <li>Torsdag: Fisk</li>
            <li>Fredag: Pasta og kake</li>
        </ul> 
    )
}
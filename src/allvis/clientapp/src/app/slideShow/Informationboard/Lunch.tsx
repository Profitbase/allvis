import { useState, useEffect } from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'
import { ImSpoonKnife } from "react-icons/im";

export const Lunch = () => {
    

    return(
    <div className={cx (styles.lunchinfo)}>
        <p> <ImSpoonKnife /> Taco</p>
     </div>
    )
}
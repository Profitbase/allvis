import * as React from 'react'
import logo from './logo.svg';
import styles from "./Informationboard.module.scss"
import {Weather} from './Weather'
import {Lunch} from './Lunch'
import {DateComponent} from './Date'
import {TitleAndLogo} from './TitleAndLogo'

import cx from 'classnames'
console.log(logo);

export const Informationboard = () => {
    return(
        <div className={cx(styles.informationboard)}>
            <TitleAndLogo />
            <div className ={cx(styles.information)}  >
                <DateComponent />
                <br />
                <Weather />
                <br />
                <Lunch />
                <br /> 
            </div>
            
        </div>
    )
}


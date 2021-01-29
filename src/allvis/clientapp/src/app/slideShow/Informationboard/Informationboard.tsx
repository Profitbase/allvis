import * as React from 'react'
import styles from './Informationboard.module.scss'
import {Weather} from './Weather'
import {Lunch} from './Lunch'
import {DateComponent} from './Date'
import cx from 'classnames'

export const Informationboard = () => {
    return(
        <div className={cx(styles.informationboard)}>
            <DateComponent />
            <br />
            <Weather />
            <p>&amp;</p>
            <Lunch />
        </div>
    )
}


import * as React from 'react'
import styles from './InformationboardShell.module.scss'
import cx from 'classnames'

export const InformationLunch = () => {
    return(
        <div className={cx (styles.lunchinfo)}>
            <p>Today chicken is served in the canteen</p>
        </div>
    )
}
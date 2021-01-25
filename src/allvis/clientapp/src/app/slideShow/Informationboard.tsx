import * as React from 'react'
import styles from './Informationboard.module.scss'
import cx from 'classnames'

export const Informationboard = () => {
    return(
        <div className={cx(styles.informationboard)}>
            
            <div className={cx (styles.weatherinfo)}>
                <p><i className="wi wi-day-sunny"></i> It is sun and 15 &#8451; outside.</p>
            </div>
            <p>&amp;</p>
            <div className={cx (styles.lunchinfo)}>
                <p>Today chicken is served in the canteen</p>
            </div>
        </div>
    )
}


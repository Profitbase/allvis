import * as React from 'react'
import styles from './InformationboardShell.module.scss'
import cx from 'classnames'

export const InformationWeather = () => {
    return(
            <div className={cx (styles.weatherinfo)}>
                <p><i className="wi wi-day-sunny"></i> It is sun and 15 &#8451; outside.</p>
            </div>
    )
}
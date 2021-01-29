import * as React from 'react'
import logo from './logo.svg';
import styles from './Informationboard.module.scss'
import {Weather} from './Weather'
import {Lunch} from './Lunch'
import {DateComponent} from './Date'
import cx from 'classnames'
console.log(logo);

function Title() {
    return (
      <div >
        <img className={cx(styles.logo)} src={logo} alt="Logo" />
        <h1 className={cx(styles.title)}>ALLVIS</h1>
      </div>
    )
  }
 export default Title

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


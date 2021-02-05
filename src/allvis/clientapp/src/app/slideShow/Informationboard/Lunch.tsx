import styles from './Informationboard.module.scss'
import cx from 'classnames'

export const Lunch = () => {
    return(
    <div className={cx (styles.lunchinfo)}>
        <p>Chicken</p>
     </div>
    )
}
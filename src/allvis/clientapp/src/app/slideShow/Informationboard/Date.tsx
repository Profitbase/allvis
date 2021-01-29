import styles from './Informationboard.module.scss'
import cx from 'classnames'

export const DateComponent = () => {

    const dateBuilder = (d: Date) => {
        let day = d.toLocaleString("default", { weekday: "long" })
        let date = d.getDate();
        let month = d.toLocaleString("default", { month: 'long' })
        let year = d.toLocaleString("default", { year: 'numeric'});

        return `${day} ${date}.${month} ${year}`
    }

    return(
    <div className={cx (styles.dateinfo)}>
        <p>{dateBuilder(new Date())}</p>
     </div>
    )
}
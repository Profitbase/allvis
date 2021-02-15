import * as React from 'react'
import cx from 'classnames'
import styles from './AdminShell.module.scss'

export const AdminShell = () => {

     React.useEffect(() => {
        const loaddata = async() => {
            const result = await fetch('api/Weather')
            console.log(await result.json())
        }
        loaddata()
     }, [])

    return(
        <div className={cx(styles.adminShell, styles.padding)}>
            AdminShell
        </div>
    )
}
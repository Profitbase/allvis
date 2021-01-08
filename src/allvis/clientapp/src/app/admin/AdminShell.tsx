import * as React from 'react'
import cx from 'classnames'
import styles from './AdminShell.module.scss'

export const AdminShell = () => {
    return(
        <div className={cx(styles.adminShell, styles.padding)}>
            AdminShell
        </div>
    )
}
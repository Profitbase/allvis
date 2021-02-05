import logo from './logo.svg';
import styles from './Informationboard.module.scss'
import cx from 'classnames'

export const TitleAndLogo = () => {
    return (
      <div >
        <img className={cx(styles.logo)} src={logo} alt="Logo" />
        <h1 className={cx(styles.title)}>ALLVIS</h1>
      </div>
    )
  }



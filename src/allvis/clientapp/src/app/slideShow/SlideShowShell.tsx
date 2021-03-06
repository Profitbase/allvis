import * as React from 'react'
import styles from "./SlideContentStyle.module.scss"
import cx from 'classnames'




export const SlideShowShell = ({slides}:{[key:string]:any}) => {
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;
    
    const goToNext = () => {
      setCurr(curr === length-1 ? 0 : curr+1);
    }
    
    React.useEffect(() => {
      setTimeout(goToNext, 5000);
      
    })
    
    if (!Array.isArray(slides) || length <= 0) {
      return null;
    }
    return (
      <section className="slider">
      {slides.map((s, i) => (
        <div className={i === curr ? "slide active" : "slide"} key={s.action}>
          <div>
          <div className={cx(styles.place1)} >
          
          <section>{s.vgnyheter}</section>
       
          </div>
          <div className={cx(styles.place2)} >
         
          <section>{s.vgsport}</section> 
          </div>
          <div className={cx(styles.place3)} >
        
          <section>{s.vgtech}</section>
          </div>
          <div className={cx(styles.place4)} >
         
          <section>{s.vgtech2}</section>
          </div>
        
          <section>{s.action}</section> 
          </div>
     
        </div>
      ))}
    </section>
    )
}


import * as React from 'react'

export const SlideShowShell = ({slides}:{[key:string]:any}) => {
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;
    
    const goToNext = () => {
      setCurr(curr === length-1 ? 0 : curr+1);
    }
    
    React.useEffect(() => {
      setTimeout(goToNext, 8000);
      
    })
    
    if (!Array.isArray(slides) || length <= 0) {
      return null;
    }
    return (
        <section className="slider">
      {slides.map((s, i) => (
        <div className={i === curr ? "slide active" : "slide"} key={s.title}>
          <div>
      <h1>{s.title}</h1> 
      <h2>{s.subtitle}</h2>
      <h2>{s.action}</h2>
      </div>
        </div>
      ))}
    </section>
    )
}



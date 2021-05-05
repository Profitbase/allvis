import { useEffect } from "react";
import styles from "./SlideContentStyle.module.scss"
import cx from 'classnames'


  export const FacebookEventer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "fb-page");
      anchor.setAttribute("data-tabs", "events"); 
      anchor.setAttribute("href", "https://www.facebook.com/profitbase/");
      anchor.setAttribute("data-height", "500px"); 
      anchor.setAttribute("data-width", "500px");  
      document.getElementsByClassName("facebookeventer-embed")[0].appendChild(anchor);
      const script = document.createElement("script");
      script.setAttribute("src", "https://connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v9.0");
      
      document.getElementsByClassName("facebookeventer-embed")[0].appendChild(script);

    }, []);
    
    return (
      <section className={cx(styles.facebookEventer)}>
        <h2>KOMMENDE ARRANGEMENTER:</h2>
        <div className="facebookeventer-embed"></div>
      </section>
     
    );
  };


  


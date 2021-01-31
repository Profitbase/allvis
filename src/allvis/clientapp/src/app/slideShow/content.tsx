import { useEffect } from "react";
import { Link } from "react-router-dom";
import React,{useState} from 'react';
import styles from "./SlideContentStyle.module.scss"
import cx from 'classnames'
import { css } from "jquery";



export const TwitterContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      
      anchor.setAttribute("class", "twitter-timeline");
    
      anchor.setAttribute("data-lang", "no");
      anchor.setAttribute("data-screen-name", "Profitbase")
      anchor.setAttribute("data-dnt", "true");
      anchor.setAttribute("data-tweet-limit", "4");
     
      anchor.setAttribute("data-chrome", "nofooter");
      anchor.setAttribute("data-chrome", "transparent"); 
      anchor.setAttribute("data-aria-polite", "assertive")
      anchor.setAttribute("grid-column", "2")
      anchor.setAttribute("href", "https://twitter.com/profitbase?ref_src=twsrc%5Etfw");
     
      document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
      
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
     
      
      

    
    }, []);
    
    return (
      <tr className={cx(styles.twitterContainer)}>
      
        <div className="twitter-embed"></div>
        

      </tr>
      
    );
  };

  
export const LinkedIn = () => {
    let url="https://www.linkedin.com/company/profitbase-as/?originalSubdomain=no";
    let element=<a href={url}>LinkedIn handle</a>;
    return(
      <div className="LinkedIn">
      <a href={url}>LinkedIn</a>
     </div>
     );
  }
 
  export const VG = () => {
    const [state,setState]=useState(false);
    let url="https://www.vg.no";
    return(
      <div className="VG">
     <a href={url}>VG</a>
    </div>
    );
  }
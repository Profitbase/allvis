import { useEffect } from "react";
import { Link } from "react-router-dom";
import React,{useState} from 'react';


export const TwitterContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "twitter-timeline");
      anchor.setAttribute("data-theme", "dark");
      anchor.setAttribute("data-tweet-limit", "2");
      anchor.setAttribute("data-chrome", "noheader nofooter nborders");
      anchor.setAttribute("href", "https://twitter.com/profitbase");
      document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
  
    return (
      <section className="twitterContainer">
        <div className="twitter-embed"></div>
      </section>
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
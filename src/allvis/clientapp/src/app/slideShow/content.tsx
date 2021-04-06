import { useEffect } from "react";
import styles from "./SlideContentStyle.module.scss"
import cx from 'classnames'


export const TwitterContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "twitter-timeline");
      anchor.setAttribute("data-lang", "no");
      anchor.setAttribute("data-screen-name", "Profitbase");
      anchor.setAttribute("data-dnt", "true");
      anchor.setAttribute("data-tweet-limit", "1");
      anchor.setAttribute("data-aria-polite", "assertive");
      anchor.setAttribute("data-chrome", "transperent");
      anchor.setAttribute("data-height", "100");
      
      anchor.setAttribute("href", "https://twitter.com/profitbase?ref_src=twsrc%5Etfw");
      document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
  
    return (
      <section className={cx(styles.twitterContainer)}>
        <div className="twitter-embed"></div>
      </section>
    );
  };

  
 
  export const FacebookContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "fb-page");
      anchor.setAttribute("data-tabs", "timeline"); 
      anchor.setAttribute("href", "https://www.facebook.com/profitbase/");
      anchor.setAttribute("data-height", "500px"); 
      anchor.setAttribute("data-width", "500px");  
      document.getElementsByClassName("facebook-embed")[0].appendChild(anchor);
      
      const script = document.createElement("script");
      script.setAttribute("src", "https://connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v9.0");
      
      document.getElementsByClassName("facebook-embed")[0].appendChild(script);

    }, []);
    
    return (
      <section className={cx(styles.facebookContainer)}>
        <div className="facebook-embed"></div>
      </section>
     
    );
  };

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


  export const YammerContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "embedded-feed");
     
      anchor.setAttribute("href", "");
      anchor.setAttribute("data-height", "700px"); 
      anchor.setAttribute("data-width", "500px");  
      document.getElementsByClassName("yammer-embed")[0].appendChild(anchor);
      
      const script = document.createElement("script");
      script.setAttribute("src", "https://c64.assets-yammer.com/assets/platform_embed.js");
      document.getElementsByClassName("yammer-embed")[0].appendChild(script);
    }, []);
    
    return (
      <section className={cx(styles.yammerContainer)}>
        <div className="yammer-embed"></div>
      </section>
      
    );
  };


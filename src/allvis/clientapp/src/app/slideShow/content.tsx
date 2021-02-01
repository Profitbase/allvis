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
      anchor.setAttribute("data-tweet-limit", "4");
      anchor.setAttribute("data-aria-polite", "assertive");
      anchor.setAttribute("data-chrome", "transperent");
      anchor.setAttribute("href", "https://twitter.com/profitbase");
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

  
export const LinkedIn = () => {
    let url="https://www.linkedin.com/company/profitbase-as/?originalSubdomain=no";
    let element=<a href={url}>LinkedIn handle</a>;
    return(
      <div className="LinkedIn">
      <a href={url}>LinkedIn</a>
     </div>
     );
  }
 
  export const FacebookContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "fb-page");
      anchor.setAttribute("data-tabs", "timeline"); 
      anchor.setAttribute("href", "https://www.facebook.com/profitbase/");
      anchor.setAttribute("data-height", "700px"); 
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
      anchor.setAttribute("data-height", "700px"); 
      anchor.setAttribute("data-width", "500px");  
      document.getElementsByClassName("facebookeventer-embed")[0].appendChild(anchor);
      const script = document.createElement("script");
      script.setAttribute("src", "https://connect.facebook.net/nb_NO/sdk.js#xfbml=1&version=v9.0");
      
      document.getElementsByClassName("facebookeventer-embed")[0].appendChild(script);

    }, []);
    
    return (
      <section className={cx(styles.facebookEventer)}>
        <div className="facebookeventer-embed"></div>
      </section>
     
    );
  };
  export const LinkedinContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "embedded-feed");
      anchor.setAttribute("data-tabs", "timeline"); 
      anchor.setAttribute("href", "https://no.linkedin.com/company/profitbase-as");
      anchor.setAttribute("data-height", "700px"); 
      anchor.setAttribute("data-width", "500px");  
      document.getElementsByClassName("linkedin-embed")[0].appendChild(anchor);
      
      const script = document.createElement("script");
      script.setAttribute("src", "https://api.linkedin.com/v1/people-search:(people:(id,first-name,last-name,headline,picture-url,industry,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes)),num-results)?first-name=parameter&last-name=parameter");
      
      document.getElementsByClassName("linkedin-embed")[0].appendChild(script);

    }, []);
    
    return (
      <section className={cx(styles.linkedinContainer)}>
        <div className="linkedin-embed"></div>
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
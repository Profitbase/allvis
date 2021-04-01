import { Twitter} from "./TwitterAPI/Twitter";
import {FacebookContainer, FacebookEventer} from "./content"
import {Linkdin} from "./Linkdin/linkdin"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {NewsNRK} from "./News/GetNewsNRK"
import { LunchSlide } from "./LunchSlide/LunchSlide";



var data = [
    
    
    {
        title: "",
        subtitle: "",
        action: <NewsVGOgE24 kanal = {NewsSources.VG_News_toppsaker} />
    }, 
    {
        title: "",
        subtitle: "",
        action: <NewsNRK kanal = {NewsSources.NRK_News_toppsaker} />
    }, 
   {
        subtitle: "",
        action: <Linkdin/>
    },
 
    {
        title: "",
        subtitle:"",
        action: <Twitter/>,
        
    },
    {
        title: '',
        subtitle: '',
        action: <FacebookContainer/>
    },
    {
        title: "Kommende Arrangementer",
        subtitle: "",
        action: <FacebookEventer/>
    },
    
    {
        title: "",
        subtitle:"",
        action: <LunchSlide/>,
        
    } 
  
  ]

export default data;

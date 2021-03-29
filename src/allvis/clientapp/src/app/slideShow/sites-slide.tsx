import { Twitter} from "./TwitterAPI/Twitter";
import {FacebookContainer, FacebookEventer} from "./content"
import {Linkdin} from "../admin/Linkdin"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {NewsNRK} from "./News/GetNewsNRK"



var data = [
    {
        title: "",
        subtitle: "",
        action: <NewsNRK kanal = {NewsSources.NRK_News} />
    }, 
    {
        title: "",
        subtitle: "",
        action: <NewsNRK kanal = {NewsSources.NRK_Rogaland} />
    }, 
    {
        title: "",
        subtitle: "",
        action: <NewsVGOgE24 kanal = {NewsSources.E24_Aksjetips}/>
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
   
   
   
  
  ]

export default data;

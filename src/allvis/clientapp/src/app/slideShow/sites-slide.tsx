import { Twitter} from "./TwitterAPI/Twitter";
import {FacebookContainer, FacebookEventer} from "./content"
import {Linkdin} from "../admin/Linkdin"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {NewsNRK} from "./News/GetNewsNRK"
import {Facebook} from "./FacebookAPI/facebook"

var data = [
    {
        title:  "",
        subtitle: "VG NYHETER",
        action: <NewsVGOgE24 kanal = {NewsSources.VG_News} />
    }, 
  
    {
        title: "",
        subtitle: "",
        action: <NewsVGOgE24 kanal = {NewsSources.VG_Sport} />
    }, 
    {
        title: "",
        subtitle: "",
        action: <NewsVGOgE24 kanal = {NewsSources.VG_Tech} />
    }, 
   
    {
        title: "",
        subtitle: "",
        action: <NewsVGOgE24 kanal = {NewsSources.E24_BorsOgFinans} />
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
        title: "",
        subtitle: "",
        action: <FacebookEventer/>
    },
   
  ]

export default data;

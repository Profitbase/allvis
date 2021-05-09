import { Twitter} from "./TwitterAPI/Twitter";
import {FacebookEventer} from "./content"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {NewsNRK} from "./News/GetNewsNRK"
import {Facebook} from "./API/FacebookAPI/facebook"

var data = [
    {
        vgsporttitle: "VG SPORT:",
        vgsport:  <NewsVGOgE24 kanal = {NewsSources.VG_Sport} />,
        vgnyhetertitle: "VG NYHETER:",
        vgnyheter: <NewsVGOgE24 kanal = {NewsSources.VG_News} />,
        vgtechtitle: "E24 AKSJETIPS:",
        vgtech:<NewsVGOgE24 kanal = {NewsSources.E24_Aksjetips}/>,
        vgtechtitle2: "E24 BØRS OG FINANS:",
        vgtech2:<NewsVGOgE24 kanal = {NewsSources.E24_BorsOgFinans} />
    }, 
 

    {
        title: "",
        subtitle: "",
        action: <NewsVGOgE24 kanal = {NewsSources.VG_Tech} />
    }, 
    {
        title: "",
        subtitle:"",
        action: <Twitter/>,
      
    }, 

    {
        title: "",
        subtitle:"",
        action: <Facebook/>,
    
    }, 
 
    {
        title: "",
        subtitle:"",
        action: <FacebookEventer/>,
        
    },
    {
      title: "",
      subtitle:"",
      action: <Facebook/>,
      
  },
  {
    title: "",
    subtitle:"",
    action: <FacebookEventer/>,
    
},
    
  ]

export default data;

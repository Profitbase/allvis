import { Twitter} from "./TwitterAPI/Twitter";
import {FacebookContainer, FacebookEventer} from "./content"
import {Linkdin} from "../admin/Linkdin"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {NewsNRK} from "./News/GetNewsNRK"
<<<<<<< HEAD
=======
import {Facebook} from "./FacebookAPI/facebook"
>>>>>>> Lagt til bruk av Facebook API

var data = [
    {
        vgsporttitle: "VG SPORT:",
        vgsport:  <NewsVGOgE24 kanal = {NewsSources.VG_Sport} />,
        vgnyhetertitle: "VG NYHETER:",
        vgnyheter: <NewsVGOgE24 kanal = {NewsSources.VG_News} />,
        vgtechtitle: "VG TECH:",
        vgtech:<NewsVGOgE24 kanal = {NewsSources.VG_Tech} />,
        vgtechtitle2: "VG TECH:",
        vgtech2:<NewsVGOgE24 kanal = {NewsSources.VG_Tech} />
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

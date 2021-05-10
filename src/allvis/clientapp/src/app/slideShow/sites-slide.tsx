import { Twitter} from "./API/TwitterAPI/Twitter";
import {FacebookEventer} from "./content"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {Facebook} from "./API/FacebookAPI/facebook"

var data = [
    {
        
        vgsport:  <NewsVGOgE24 kanal = {NewsSources.VG_Sport} />,
    
        vgnyheter: <NewsVGOgE24 kanal = {NewsSources.VG_Tech} />,
        
        vgtech:<NewsVGOgE24 kanal = {NewsSources.E24_Aksjetips}/>,
       
        vgtech2:<NewsVGOgE24 kanal = {NewsSources.E24_BorsOgFinans} />
    }, 

    
    {
        
        action: <Twitter/>,
      
    }, 

    {
        
        action: <Facebook/>,
    
    }, 
 
    {

        action: <FacebookEventer/>,
        
    
 
},
    
  ]

export default data;

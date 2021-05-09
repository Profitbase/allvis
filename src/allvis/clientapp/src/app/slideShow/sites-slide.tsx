import { Twitter} from "./API/TwitterAPI/Twitter";
import {FacebookContainer, FacebookEventer} from "./content"
import {NewsVGOgE24} from "./News/GetNewsVGogE24"
import NewsSources from "./News/NewsSources";
import {NewsNRK} from "./News/GetNewsNRK"
import {Facebook} from "./API/FacebookAPI/facebook"

var data = [
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
    
  ]

export default data;

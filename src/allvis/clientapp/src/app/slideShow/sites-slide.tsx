import { Twitter} from "./TwitterAPI/Twitter";
import { Facebook} from "../admin/Facebook";
import {FacebookContainer, FacebookEventer} from "./content"


var data = [
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
        subtitle: "LinkedIn",
        action: ""
    },
   
    
  
  ]

export default data;

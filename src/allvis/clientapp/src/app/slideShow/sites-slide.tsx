import { Twitter} from "../admin/Twitter";
import { Facebook} from "../admin/Facebook";
import { FacebookEventer} from "./content"


var data = [
    {
        title: "",
        subtitle:"",
        action: <Twitter/>,
        
    },
    {
        title: '',
        subtitle: '',
        action: <Facebook/>,
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

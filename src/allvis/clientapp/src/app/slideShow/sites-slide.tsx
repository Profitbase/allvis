import { Twitter} from "./TwitterAPI/Twitter";
import {FacebookContainer, FacebookEventer} from "./content"
import {Linkdin} from "../admin/Linkdin"

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
        action: <Linkdin/>
    }, 
    {
        title: "",
        subtitle: "I dag er det fint vær",
        action: ""
    }, 
  
  ]

export default data;

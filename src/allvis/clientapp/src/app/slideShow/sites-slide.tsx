import {TwitterContainer, VG, LinkedIn} from "./content"


export default [
    {
        title: 'Første side!',
        subtitle: 'text',
        actionHref: "hei"
    },

    {
        title: "Andre side",
        subtitle: "twitter",
        actionHref1: <TwitterContainer/>
    },
    
    {
        title: "Tredje side",
        subtitle: "VG",
        actionHref2: <VG/>
    },
    {
        title: "fjerde side",
        subtitle: "LinkedIn",
        actionHref3: <LinkedIn/>
    },
  
  ]

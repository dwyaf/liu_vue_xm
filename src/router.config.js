import Home from "./home.vue"
import Navheader from "./components/Navheader.vue"
import Load from "./components/load.vue"



export default{
    routes:[
        {path:"/home",component:Home},
        {path:"/navheader",component:Navheader},
        {path:"/load",component:Load},
       
        {path:"*",redirect:"/home"}
    ]
}
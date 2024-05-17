import Add from "../pages/site/Add/Add"
import Basket from "../pages/site/Basket/Basket"
import Home from "../pages/site/Home/Home"
import Products from "../pages/site/Products/Products"
import SiteRoot from "../pages/site/SiteRoot"

const ROUTES=[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"products",
                element:<Products/>
            }
        ]
    }
]

export default ROUTES
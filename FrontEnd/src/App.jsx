import { useEffect, useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ROUTES from "./routes/routes"
import MainContext from "./context/context"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from "axios"
function App() {
const [data,setData]=useState([])
const router=createBrowserRouter(ROUTES)
useEffect(()=>{
axios.get("http://localhost:5000/products").then(res=>{
  console.log(res.data)
  setData([...res.data])
})
},[])
const contextData={
  data,setData
}

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}

export default App

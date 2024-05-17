import React, { useContext } from 'react'
import './Products.css'
import MainContext from '../../../context/context'
import axios from 'axios'
const Products = () => {
  const {data,setData}=useContext(MainContext)
  const deleteItem=(id)=>{
    axios.delete(`http://localhost:5000/products/${id}`).then(res=>{
      setData([...res.data])
    })
  }
  return (
   
    <div>
      <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
      {
        data.map((item,index)=>{
          return (
            <tr key={index} item={item}>
              <td>{item._id}</td>
              <td><img width={"60px"} src={item.image} alt="" /></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><button onClick={()=>{
                deleteItem(item._id)
              }} style={{padding:"10px",background:"red",color:"white",borderRadius:"10px",border:"10px"}}>Delete</button></td>
            </tr>
          )
        })
      }
    </tbody>
</table>
    </div>
  )
}

export default Products
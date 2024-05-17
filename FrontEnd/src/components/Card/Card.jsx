import React, { useEffect, useState } from 'react'

const Card = ({item}) => {
    const [data,setData]=useState([])
    const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket)); 
      }, [basket]);
      const addToBasket = (id) => {
        let basketItem = basket.find((e) => e.id == id);
        if (!basketItem) {
         
    
          setBasket([...basket,{ ...item,
                                 count: 1,
                               },
          ]);
        } else {
          basketItem.count++;
          setBasket([...basket]);
        }
      };
  return (
    <div style={{width:"250px",border:"1px solid black",padding:"20px",display:"flex",justifyContent:"start",alignItems:"start",flexDirection:"column",gap:"20px"}} className="card">
        <img style={{width:"200px",height:"250px"}} src={item.image} alt="" />
        <h3>{item.title}</h3>
        <span>{item.price}</span>
        <button style={{padding:"10px",border:"none",background:"orangered",color:"white",borderRadius:"20px"}}  onClick={()=>{
          addToBasket(item._id)
        }}>Add to Basket</button>
    </div>
  )
}

export default Card
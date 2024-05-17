import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Card from '../Card/Card'
import './Section2.css'
const Section2 = () => {
    const {data}= useContext(MainContext)
  return (

    <section className='section2'>
        <span>OUR MENU</span>
        <h2>Discover Our Exclusive Menu</h2>
        <div className="cardspawn">
            {
                data.map((item,index)=>{
                    return (<Card key={index} item={item} />)
                })
            }
        </div>
    </section>
  )
}

export default Section2
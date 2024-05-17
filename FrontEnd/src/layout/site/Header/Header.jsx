import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
   <nav>
    <a className='nava' href="#">Tasty</a>
    <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/basket"}>Basket</Link></li>
      <li><Link to={"/add"}>Add</Link></li>
      <li><Link to={"/products"}>Products</Link></li>
    </ul>
   </nav>
  )
}

export default Header
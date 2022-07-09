
import React, { useState } from 'react'
import {useEffect} from "react"
import SingleProduct from './SingleProduct'


const Home = () => {

  const [cart, setCart]=useState([])
  const [products,setProducts]=useState([])
  
  useEffect( ()=>{
      fetch("https://jsonplaceholder.typicode.com/photos").then((result)=>{
      result.json().then((resp)=>{
          // console.log("result",resp)
          setProducts(resp)
      })
  })
  },[])
  
  products.splice(20,products.length)
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map( (prod) => (
            <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id} />
        ))}
      </div>
    
    </div>
    
  )
}

export default Home
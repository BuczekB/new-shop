import {useEffect, useState} from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector"

import InfoAboutBuy from './InfoAboutBuy'


import Card from './Card'


import '../Style/Shop.scss'

function Shop() {

   const [isTruOrFalse, setIsTruOrFalse] = useState(false)
   const [singleItem, setSingleItem] = useState({})
   const [sortedProducts, setSortedProducts] = useState([])

   const products =  useSelector((state) => state.allProducts.products)


   const openInfoWindow = (payload) =>{
    setIsTruOrFalse(!isTruOrFalse)
    setSingleItem(payload)
   }

  const sortProductByPrice = (e) => {
    
    
    const value = e.target.value

    if(value === 'highest'){
      const sortedProducts = [...products].sort((a,b) => a.price - b.price)
    setSortedProducts(sortedProducts)
    }
    if(value === 'lowest'){
      const sortedProducts = [...products].sort((a,b) => b.price - a.price)
    setSortedProducts(sortedProducts)
    }
  }

  useEffect(() =>{
    setSortedProducts(products)
  },[products])


  
    

   
    const listOfProducts =  sortedProducts.map( (item) =>{
      return(
        <Card key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} open={openInfoWindow}/>
      )
     })



   


    return (
      <div className="shopContainer" >
          <select onClick={sortProductByPrice} className='shopContainerFilter' >
          <option  value="highest">Price from highest</option>
          <option  value="lowest">Price from lowest</option>
          </select>
          <InfoAboutBuy isTruOrFalse={isTruOrFalse} openInfoWindow={openInfoWindow} singleItem={singleItem} ></InfoAboutBuy>
          {listOfProducts.length ? listOfProducts : <h1>Loading...</h1>}
      </div>
    )
  }
  
  export default Shop
  
import {useEffect, useState} from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector"

import InfoAboutBuy from './InfoAboutBuy'


import Card from './Card'


import '../Style/Shop.scss'

function Shop() {

   const [isTruOrFalse, setIsTruOrFalse] = useState(false)
   const [singleItem, setSingleItem] = useState({})

   const products =  useSelector((state) => state.allProducts.products)


   const openInfoWindow = (payload) =>{
    setIsTruOrFalse(!isTruOrFalse)
    setSingleItem(payload)
   }

  
    

   
    const listOfProducts =  products.map( (item) =>{
      return(
        <Card key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} open={openInfoWindow}/>
      )
     })



    console.log(listOfProducts);


    return (
      <div className="shopContainer">
          <InfoAboutBuy isTruOrFalse={isTruOrFalse} openInfoWindow={openInfoWindow} singleItem={singleItem} ></InfoAboutBuy>
          {listOfProducts.length ? listOfProducts : <h1>Loading...</h1>}
      </div>
    )
  }
  
  export default Shop
  
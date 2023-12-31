import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, deleteProduct } from '../redux/actions/productActions'

import axios from 'axios'

import '../Style/Card.scss'
import { useFetcher } from 'react-router-dom'


function Card({name, price, image, id, quantity, open}) {

    
const dispatch = useDispatch()
const cartItems = useSelector((state) => state.allProducts.cart)
const isOnline = useSelector((state) => state.isAdminLogged.isLogged)


const [isVisible, setIsVisible] = useState()




useEffect(() =>{
  setIsVisible(isOnline)
},[isOnline])


const buyItem = () =>{

  

  open({name, price, image, id, quantity})

    dispatch(addToCart({name, price, image, id, quantity}))
  
}

const removeItem = () =>{
  dispatch(deleteProduct({id}))

  axios.delete(`https://new-shop-bzdy.onrender.com/product/${id}`)
}


   

    return (
      <div className='card'>

        <div className='imageBox'>
            <img src={image} alt=''></img>    
        </div>    
        <h1 className='card-header'>{name}</h1>     
        <h2  className='card-price'>Price: {price}$</h2>    
       <div className='buttonBox'>
       <button onClick={buyItem}  className='buyButton'>Add to cart</button>
       <button onClick={removeItem}  className={isVisible? 'buyButton' : 'buttonOff'}>Remove</button>
       </div>
       
      </div>
    )
  }
  
  export default Card
  
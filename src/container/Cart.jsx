import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import '../Style/Cart.scss'

import ItemInCart from './ItemInCart'


function Cart() {

    const cartProduct = useSelector((state) => state.addToCart.cart)

   
    
    const summaryArray = cartProduct.map((item) =>{
      
      return( item.price)
      
    })


    const summaryPrice = summaryArray.reduce((total , amount) => total + amount, 0)

   
    
    

    const cartBox = cartProduct.map((item) =>{

     

      return(
       <ItemInCart key={item.name} name={item.name} price={item.price} image={item.image} id={item.id} quantity={item.quantity}>
       </ItemInCart>
      )
    })

    

    return (
      <div className='cart'>
       <div className='itemsBox'>
          <div className='headings'>
            <h1>Shooping Cart</h1>
            <h2>{cartBox.length} Items</h2>
          </div>
          <div className='listOfItems'>
            <div className='navOfItems'> 
              <p>Product Details  </p> 
              <p>Quantity</p>
              <p>Price</p>
              <p>Total</p>
            </div>
          {cartBox.length? cartBox : <p className='noItems'>Cart is empty</p>}
          </div>
       </div>
       <div className='summaryBox'>
          <h2 className='headingSummaryBox'>Order Summary</h2>
          <div className='totalBox'>
            <span>Items {cartBox.length}</span>
            <span>$ {summaryPrice}</span>
          </div>
          <div className='promoBox'>
          <span className='hederPromo'>Promo Code</span>
          <input className='promoInput'></input>
          <button className='promoButton'>APPLY</button>
          </div>
          <div className='checkBox'>
          <button className='checkButton'>Checkout</button>
          </div>
       </div>
      </div>
    )
  }
  
  export default Cart
  
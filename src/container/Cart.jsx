
import { useSelector } from 'react-redux/es/hooks/useSelector'

import '../Style/Cart.scss'

import ItemInCart from './ItemInCart'


function Cart() {

    const cartProduct = useSelector((state) => state.addToCart.cart)

    const cartBox = cartProduct.map((item) =>{
      return(
       <ItemInCart key={item.name} name={item.name} price={item.price} image={item.image}>
       </ItemInCart>
      )
    })

    

    return (
      <div className='cart'>
        {cartBox}
      </div>
    )
  }
  
  export default Cart
  
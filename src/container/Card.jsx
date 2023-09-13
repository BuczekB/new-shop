
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../redux/actions/productActions'

import '../Style/Card.scss'


function Card({name, price, image}) {

    
const dispatch = useDispatch()
const cartItems = useSelector((state) => state.allProducts.cart)


const buyItem = () =>{
    dispatch(addToCart({name, price, image}))
  
}


   

    return (
      <div className='card'>

        <div className='imageBox'>
            <img src={image} alt=''></img>    
        </div>    
        <h1 className='card-header'>{name}</h1>     
        <h2  className='card-price'>Price: {price}$</h2>    
        <button onClick={buyItem}  className='buyButton'>Buy</button>
       
      </div>
    )
  }
  
  export default Card
  
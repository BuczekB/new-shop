
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, deleteProduct } from '../redux/actions/productActions'

import axios from 'axios'

import '../Style/Card.scss'


function Card({name, price, image, id}) {

    
const dispatch = useDispatch()
const cartItems = useSelector((state) => state.allProducts.cart)


const buyItem = () =>{
    dispatch(addToCart({name, price, image}))
  
}

const removeItem = () =>{
  
  console.log(id);

  dispatch(deleteProduct({id}))

  axios.delete(`http://localhost:3000/product/${id}`)
}


   

    return (
      <div className='card'>

        <div className='imageBox'>
            <img src={image} alt=''></img>    
        </div>    
        <h1 className='card-header'>{name}</h1>     
        <h2  className='card-price'>Price: {price}$</h2>    
       <div className='buttonBox'>
       <button onClick={buyItem}  className='buyButton'>Buy</button>
       <button onClick={removeItem}  className='buyButton'>Remove</button>
       </div>
       
      </div>
    )
  }
  
  export default Card
  
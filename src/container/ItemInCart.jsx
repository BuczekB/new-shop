
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import '../Style/ItemInCart.scss'
import {addQuantity, substractQuantity} from '../redux/actions/productActions'


function ItemInCart({name, price, image, quantity, id}) {

  const dispatch = useDispatch()

  const [quantityOfItem, setQuantity] = useState(quantity)

   const addOrSubtract = (e) =>{

    switch(e.target.className){
      case "+":
        setQuantity(quantityOfItem + 1)
        dispatch(addQuantity(id))
      break;
      case "-":
       if(!quantityOfItem ){
        return;
       }
       setQuantity(quantityOfItem - 1)
       dispatch(substractQuantity(id))
      break;

      default:
        return
  }
   
   }

  
    return (
      <div className='itemInCart'>
        <div className='imageBox'>
        <img src={image} alt=''></img> 
        <label className='imageLabel'>{name}</label>
        </div> 
         <div>
          <button className='+' onClick={addOrSubtract}>+</button>
         <p> {quantityOfItem}</p>
         <button className='-' onClick={addOrSubtract}>-</button>
         </div>
        <div>
        <p>$ {price}</p>
        </div>
        <div>
        <p>$ {price * quantityOfItem}</p>
        </div>
      </div>
    )
  }
  
  export default ItemInCart
 
 
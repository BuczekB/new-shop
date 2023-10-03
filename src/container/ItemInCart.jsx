

import { useState } from 'react'
import '../Style/ItemInCart.scss'


function ItemInCart({name, price, image, quantity}) {


  const [quantityOfItem, setQuantity] = useState(quantity)

   const addOrSubtract = (e) =>{

    switch(e.target.className){
      case "+":
        setQuantity(quantityOfItem + 1)
      break;
      case "-":
       if(!quantityOfItem ){
        return;
       }
       setQuantity(quantityOfItem - 1)
      break;

      default:
        return
  }
   
   }

    return (
      <div className='itemInCart'>
        <div>
        <img src={image} alt=''></img> 
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
 
 
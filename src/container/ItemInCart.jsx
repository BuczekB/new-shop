


import '../Style/ItemInCart.scss'


function ItemInCart({name, price, image}) {

   

    return (
      <div className='itemInCart'>
         <img src={image} alt=''></img>  
         <p>Quantity: {1}</p>
         <p>Price: {price}</p>
         <p>Total: {price}</p>
      </div>
    )
  }
  
  export default ItemInCart
 
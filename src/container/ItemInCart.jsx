


import '../Style/ItemInCart.scss'


function ItemInCart({name, price, image}) {

   

    return (
      <div className='itemInCart'>
         <img src={image} alt=''></img>  
        <h2>Name: {name}</h2>
        <h2>Price: {price}</h2>
      </div>
    )
  }
  
  export default ItemInCart
  
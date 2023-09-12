
import '../Style/Card.scss'

import watch from '../image/watch.jpg'

function Card({name, price, image}) {

    

    return (
      <div className='card'>

        <div className='imageBox'>
            <img src={image} alt=''></img>    
        </div>    
        <h1 className='card-header'>{name}</h1>     
        <h2  className='card-price'>Price: {price}$</h2>    
        <button  className='buyButton'>Buy</button>
       
      </div>
    )
  }
  
  export default Card
  
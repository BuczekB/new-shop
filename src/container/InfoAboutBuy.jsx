import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import newImage from '../image/watch.jpg'


import '../Style/InfoAboutBuy.scss'

function InfoAboutBuy(isTruOrFalse) {


const [toggle, setToggle] = useState(false)


const showOrHide = () =>{
        setToggle(false)
}

useEffect(() =>{
    if(isTruOrFalse){
        setToggle(true)
    }
},[isTruOrFalse])
    
    return (
      <div className={toggle? '' : 'off'}>
        <div className='infoAboutBuyContainer' >
        <h1>Added To Cart</h1>
        <div className='infoImageBox'>
            <img src={newImage}></img>
            <label>Name: Watch </label>
        </div>
        <div>
        <h2>Quantity: 1</h2>
        <h2>Price: 12$</h2>
        </div>
        <Link to='/Cart'>
        <button >
            Go To Cart
        </button>
        </Link>
        <button onClick={showOrHide} className='exit'>X</button>
        
      </div>
      </div>
    )
  }
  
  export default InfoAboutBuy
  
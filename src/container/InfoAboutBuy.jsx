import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import newImage from '../image/watch.jpg'


import '../Style/InfoAboutBuy.scss'

function InfoAboutBuy({isTruOrFalse, openInfoWindow, singleItem}) {


const [toggle, setToggle] = useState(false)
const navigate = useNavigate()

const [itemData, setItemData]= useState({
  name: '',
  quantity: 0 ,
  price: 0,
  image: ''
})



const showOrHide = () =>{
 
        setToggle(false)
        openInfoWindow()
      
}

const goToCart = () =>{
  navigate('/Cart')
}




useEffect(() =>{
  
  if(isTruOrFalse){
    setToggle(true)
    const resetInputs = {
      name: singleItem.name,
      quantity: singleItem.quantity ,
      price: singleItem.price,
      image: singleItem.image
    }

    setItemData(resetInputs)
  }
  
},[isTruOrFalse])

    return (
      <div className={toggle? '' : 'off'}>
        <div className='infoAboutBuyContainer' >
        <h1>Added To Cart</h1>
        <div className='infoImageBox'>
            <img src={itemData.image}></img>
            <label>Name: {itemData.name} </label>
        </div>
        <div>
        <h2>Quantity:  {itemData.quantity}$</h2>
        <h2>Price:  {itemData.price}$</h2>
        </div>
        <button onClick={goToCart} >
            Go To Cart
        </button>
        <button onClick={showOrHide} className='exit'>X</button>
        
      </div>
      </div>
    )
  }
  
  export default InfoAboutBuy
  
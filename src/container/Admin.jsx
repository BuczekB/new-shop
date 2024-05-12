
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions/productActions'
import axios from 'axios'

import defaultImageWatch from '../image/watch.jpg'


import '../Style/Admin.scss'



function Admin() {

  const dispatch = useDispatch()
  

  const [newItem, setNewItem] = useState({
    name: "",
    price: '',
    image: ''
  })

  const handleChaneg = (e) => {
   const {name, value} = e.target

   setNewItem((prev) =>{
    return {...prev, [name] : value}
  })

  }

  
  const addNewItem = (e) =>{
    e.preventDefault()

    let defaultImage = defaultImageWatch

    if(newItem.image != ''){
      defaultImage = newItem.image
    }

    if(newItem.name != ''){
      console.log('works');
      axios.post('https://new-shop-bzdy.onrender.com/product', {
        "name": newItem.name,
        "quantity": 1,
        "price": newItem.price,
        "image": defaultImage
      })
      .then(dispatch(addProduct({
        "name": newItem.name,
        "quantity": 1,
        "price": newItem.price,
        "image": defaultImage
      })))
      .then(() =>{
        const resetInputs = {
          name: "",
          price: '',
          image: ''
        }
        setNewItem(resetInputs)
      })
      .catch((err) =>{
        console.log(err);
      })
    }

   

   

  
    
  }


    return (
      <div className='adminContainer'>
        <h1>Add New Product</h1>         
        <div className='inputBox'>
        <label type="text"  >Name</label>
        <input type='text' className="nameBox" name="name" value={newItem.name} onChange={handleChaneg}></input>
        </div>
        <div className='inputBox'>
        <label type="number">Price</label>
        <input type='text' className="Price"  name="price" value={newItem.price} onChange={handleChaneg}></input>
        </div>
        <div className='inputBox'>
        <label type="text" >Image</label>
        <input type='text' className="Image" name="image" value={newItem.image} onChange={handleChaneg}></input>
        </div>
        <button className='addButton' type="submit" onClick={addNewItem} >Add Product</button>
      </div>
    )
  }
  
  export default Admin
  
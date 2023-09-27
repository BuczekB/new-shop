
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions/productActions'
import axios from 'axios'


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



   

    if(newItem.name != ''){
      axios.post('http://localhost:3000/product', {
        "name": newItem.name,
        "quantity": 1,
        "price": newItem.price,
        "image": newItem.image
      })
      .then(dispatch(addProduct({
        "name": newItem.name,
        "quantity": 1,
        "price": newItem.price,
        "image": newItem.image
      })))
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
        <input type='text' className="nameBox" name="name" onChange={handleChaneg}></input>
        </div>
        <div className='inputBox'>
        <label type="number">Price</label>
        <input type='text' className="Price"  name="price" onChange={handleChaneg}></input>
        </div>
        <div className='inputBox'>
        <label type="text" >Image</label>
        <input type='text' className="Image" name="image" onChange={handleChaneg}></input>
        </div>
        <button className='addButton' type="submit" onClick={addNewItem} >Add Product</button>
      </div>
    )
  }
  
  export default Admin
  
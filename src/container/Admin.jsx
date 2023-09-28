
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions/productActions'
import axios from 'axios'


import '../Style/Admin.scss'
import LoginPage from './LoginPage'


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

    let defaultImage = 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'

    if(newItem.image != ''){
      defaultImage = newItem.image
    }

    if(newItem.name != ''){
      axios.post('http://localhost:3000/product', {
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
          ...newItem,
          image: "asdasd",
        }
        setNewItem(resetInputs)
        console.log('works');
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
  
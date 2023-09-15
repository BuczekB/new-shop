
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'

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
      .then(response => console.log(response))
      .catch((err) =>{
        console.log(err);
      })
    }
    
  }


    return (
      <div>

      <form>
        <h1>New Product</h1>         
        <div>
        <label type="text"  >Name</label>
        <input className="nameBox" name="name" onChange={handleChaneg}></input>
        </div>
        <div>
        <label type="number">Price</label>
        <input className="Price"  name="price" onChange={handleChaneg}></input>
        </div>
        <div>
        <label type="text" >Image</label>
        <input className="Image" name="image" onChange={handleChaneg}></input>
        </div>
        <button type="submit" onClick={addNewItem} >Add Product</button>
      </form>  
      </div>
    )
  }
  
  export default Admin
  
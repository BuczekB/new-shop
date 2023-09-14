
import {useState} from 'react'

function Admin() {

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
console.log(newItem);
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
  
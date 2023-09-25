import { useSelector } from "react-redux/es/hooks/useSelector"


import Card from './Card'


import '../Style/Shop.scss'

function Shop() {


    const products =  useSelector((state) => state.allProducts.products)

    
 
    
   
    const listOfProducts =  products.map( (item) =>{
      return(
        <Card key={item._id} name={item.name} price={item.price} image={item.image}/>
      )
     })

     


    return (
      <div className="shopContainer">
       {listOfProducts}
      </div>
    )
  }
  
  export default Shop
  
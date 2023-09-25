
import {useDispatch, useSelector} from 'react-redux'

import axios from 'axios'
import { useEffect } from 'react'
import { setProducts } from '../redux/actions/productActions'

const FetchData = () =>{

    
    const dispatch = useDispatch()
    const products =  useSelector((state) => state.allProducts.products)

    
  

    const getData = async () =>{
       
        const response = await axios
        .get('http://localhost:3000/products')
       .catch((err) =>{
            console.log('err', err);
        })
        dispatch(setProducts(response.data))
        console.log(response.data, 'response');
      
    }
    
 
  

    useEffect(() =>{
        getData()
    },[products.length])

     return(
        <div>
        </div>
     )
}

export default FetchData

import {useDispatch} from 'react-redux'

import axios from 'axios'
import { useEffect } from 'react'
import { setProducts } from '../redux/actions/productActions'

const FetchData = () =>{

    
    const dispatch = useDispatch()

    const getData = async () =>{
       
        const response = axios
        .get('http://localhost:3000/products')
        .then(() =>{
            console.log(response.data);
        })
       .catch((err) =>{
            console.log('err', err);
        })
        dispatch(setProducts(response))
        console.log(response.data);
    }


    useEffect(() =>{
        getData()
    },[])

     return(
        <>
        </>
     )
}

export default FetchData
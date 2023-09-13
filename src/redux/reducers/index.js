import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer, addToCart } from './productReducers'



const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    addToCart: addToCart
})


export default reducers
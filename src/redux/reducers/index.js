import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer, addToCart, isAdminLogged } from './productReducers'




const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    addToCart: addToCart,
    isAdminLogged: isAdminLogged
   
})


export default reducers
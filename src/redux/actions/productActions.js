import { ActionTypes } from "../contants/action-types";


export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const addToCart = (cart) =>{
    return{
        type: ActionTypes.ADD_TO_CART,
        payload: cart
    }
}


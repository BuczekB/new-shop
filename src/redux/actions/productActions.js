import { ActionTypes } from "../contants/action-types";


export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const addProduct = (products) =>{
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: products
    }
}

export const deleteProduct = (products) =>{
    return{
        type: ActionTypes.DELETE_PRODUCT,
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

export const isAdminLogged = (payload) =>{
    return{
        type: ActionTypes.IS_ADMIN_LOGGED,
        payload: payload
    }
}

export const addQuantity = (payload) =>{
    return{
        type: ActionTypes.ADD_QUANTITY,
        payload: payload
    }
}

export const substractQuantity = (payload) =>{
    return{
        type: ActionTypes.SUBSTRACT_QUANTITY,
        payload: payload
    }
}

export const deleteItems = (payload) =>{
    return{
        type: ActionTypes.DELETE_ITEMS,
        payload: payload
    }
}






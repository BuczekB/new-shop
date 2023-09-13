import { ActionTypes } from "../contants/action-types";

const initialState = {
    products:[],
    cart: []
}


export const productReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:

        return{...state, products:payload}

        default:
            return state
    }

}


export const selectedProductReducer = (state = {}, {type, payload}) =>{

    switch(type){
        case ActionTypes.SELECTED_PRODUCT:

        return{...state, ...payload}

        default:
            return state
    }

}


export const addToCart = (state = initialState, {type, payload}) =>{

    switch(type){
        case ActionTypes.ADD_TO_CART:

   

        return{
            ...state,
             cart: [payload, ...state.cart]}

        default:
            return state
    }

}
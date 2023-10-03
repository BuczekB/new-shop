import { ActionTypes } from "../contants/action-types";

const initialState = {
    products:[],
    cart: [],
    isLogged: false
}


export const productReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:

        return{...state, products:payload}

        case ActionTypes.ADD_PRODUCT:

        return{
            ...state,
            products:[payload, ...state.products]
        }

        case ActionTypes.DELETE_PRODUCT:


       
        const allItemst = state.products
        const newListOfItems = allItemst.filter((element) => !element._id.includes(payload.id))


        return{
            ...state,
            products:newListOfItems
        }


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

        

        const itemIds = state.cart.map((item) =>{
           return( item.id)
        })

        console.log(itemIds);

        if(itemIds.includes(payload.id)){
           const fintItem = state.cart.findIndex((item) => item.id === payload.id)

           
           console.log(fintItem);

          state.cart[fintItem].quantity += 1

          return{
            ...state
          }
        } else{
            return{
                ...state,
                 cart: [payload, ...state.cart]}
        }

      

     

        default:
            return state
    }

}


export const isAdminLogged = (state = initialState, {type, payload = false}) =>{

    switch(type){
        case ActionTypes.IS_ADMIN_LOGGED:

  

        return{
            ...state,
             isLogged: payload 
            }

        default:
            return state
    }

}
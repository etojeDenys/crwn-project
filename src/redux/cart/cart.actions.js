import CartTypes from "./cart.types";


export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN,
})
export const addCart = item => ({
    type: CartTypes.ADD_CART,
    payload: item,
})
export const clearItemFromList = item => ({
    type: CartTypes.CLEAR_CART_FROM_LIST,
    payload: item,
})
export const removeCart = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item,
})

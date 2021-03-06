import CartTypes from "./cart.types";
import {addItemToCard, removeItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartTypes.ADD_CART:
            return {
                ...state,
                cartItems: addItemToCard(state.cartItems, action.payload)
            }
        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        case CartTypes.CLEAR_CART_FROM_LIST:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        default:
            return state
    }
}

export default cartReducer
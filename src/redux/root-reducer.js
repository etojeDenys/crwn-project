import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import menuListReducer from "./menuList/menu-list.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menuList: menuListReducer,
    shop: shopReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


export default persistReducer(persistConfig, rootReducer)
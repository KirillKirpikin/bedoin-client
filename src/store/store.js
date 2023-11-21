import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from "./api/api";
import cartSlice from "./cart/cartSlice";
import orderSlice from "./order/orderSlice";
import userSlice from "./user/userSlice";
const cartTransform = {
    in: (state) => ({ cart: state.cart }),
    out: (state) => state,
};



const persistConfig ={
    key: 'root',
    storage,
    whitelist:['cart'],
    transforms: [cartTransform],
};

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    cart: cartSlice,
    order: orderSlice,
    user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }}).concat(api.middleware),
    devTools: false,
})

const persistor = persistStore(store);

export {store, persistor};

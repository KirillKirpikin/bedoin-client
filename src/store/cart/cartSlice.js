import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const checkPromo = createAsyncThunk('user/promo', 
    async(payload, thunkApi)=>{
        try {
            const res = await axios.post(`${BASE_URL}/promo/check`, payload);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data.message)
        }
})

const initialState ={
    cart:[],
    isDiscounted: false,
    isDiscountedDrip: false,
    isDiscountedLemonade: false,
    isPromo: false,
    promoSale: null,    
    cartOpen:false,
    totalReg: '',
    totalOpt: '',
    city: '',
    warehouse:''
}

const cartSlice = createSlice({
    name: 'slice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(checkPromo.fulfilled, (state, action)=>{
            state.promoSale = action.payload;
            state.isPromo = true;            
        })
    },
    reducers:{
        addItemtoCart:(state, {payload})=>{
            let newCart = [...state.cart];
            const foundIndex = state.cart.findIndex((item)=> item._id === payload._id && item.select === payload.select && item.packing === payload.packing);
            if(foundIndex !== -1) {
                newCart[foundIndex].quantity +=payload.quantity;             
            } else newCart.push(payload)
            state.cart = newCart;
        },
        addDripToCart:(state, {payload}) =>{
            let newCart = [...state.cart];
            const foundIndex = state.cart.findIndex((item)=>item._id === payload._id);
            if(foundIndex !== -1) {
                newCart[foundIndex].quantity +=payload.quantity;             
            } else newCart.push(payload)
            state.cart = newCart;
        },
        updateQuantity:(state, {payload})=>{            
            const foundIndex = state.cart.findIndex((item)=> item._id === payload._id && item.select === payload.select && item.packing === payload.packing);
            if(foundIndex !== -1){
                state.cart[foundIndex].quantity = payload.quantity;                
            }
        },
        removeItemFromCart:(state, {payload})=>{
            state.cart = state.cart.filter((item)=> item._id + item.select + item.packing !== payload);
        },
        clearCart: (state)=>{
            state.cart = [];
            state.promoSale = null;
            state.isPromo = false;
        },
        setIsDiscountedCoffee: (state, {payload}) => {
            state.isDiscounted = payload;
            // state.isDiscountedDrip = true;
        },
        setIsDiscountedDrip: (state, {payload}) => {
            state.isDiscountedDrip = payload;
        },
        setIsDiscountedLemonade: (state, {payload}) => {
            state.isDiscountedLemonade = payload;
        },
        setTotalReg: (state, {payload}) => {
            state.totalReg = payload;
        },
        setTotalOpt: (state, {payload}) => {
            state.totalOpt = payload;
        },
        addCity:(state, {payload})=>{
            state.city = payload
        },
        addWarehouse:(state, {payload})=>{
            state.warehouse = payload
        },
        openCart:(state, {payload})=>{
            state.cartOpen = payload;
        },
        clearPromo:(state, {payload})=>{
            state.isPromo = false;
            state.promoSale = null;
        }        
    }
})

export const { clearPromo, addItemtoCart, setIsDiscountedDrip, setIsDiscountedLemonade, updateQuantity, removeItemFromCart, setTotalOpt, setTotalReg, clearCart, setIsDiscountedCoffee, addCity, addWarehouse, openCart, addDripToCart} = cartSlice.actions;
export default cartSlice.reducer;
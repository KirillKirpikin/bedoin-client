import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    cart:[],
    isDiscounted: false,
    isDiscountedDrip: false,
    cartOpen:false,
    totalReg: '',
    totalOpt: '',
    city: '',
    warehouse:''
}

const cartSlice = createSlice({
    name: 'slice',
    initialState,
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
        },
        setIsDiscountedCoffee: (state, {payload}) => {
            state.isDiscounted = payload;
            // state.isDiscountedDrip = true;
        },
        setIsDiscountedDrip: (state, {payload}) => {
            state.isDiscountedDrip = payload;
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
        }
        

    }
})

export const {addItemtoCart, setIsDiscountedDrip, updateQuantity, removeItemFromCart, setTotalOpt, setTotalReg, clearCart, setIsDiscountedCoffee, addCity, addWarehouse, openCart, addDripToCart} = cartSlice.actions;
export default cartSlice.reducer;
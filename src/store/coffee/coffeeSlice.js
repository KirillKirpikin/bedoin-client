import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URL, HEADER } from "../../utils/constants";

export const createCoffee = createAsyncThunk('coffee/createCoffee',
async (payload, thunkApi)=>{
    try {
        
        const res = await axios.post(`${BASE_URL}/coffee/`, payload);
        return res.data
        
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data.message)
    }

})

export const getAllCoffee = createAsyncThunk('coffee/getAllCoffee', 
    async (_, thunkApi) =>{
        try {           
            
            const res = await axios(`${BASE_URL}/coffee`, {headers: HEADER});
            return res.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error)
        }
})




const initialState = {
    list: [],
    isLoading: false
}

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllCoffee.fulfilled, (state, action)=>{
            state.list = action.payload;
        })
        builder.addCase(createCoffee.fulfilled, (state,action)=>{
            state.list.push(action.payload)
        })
    }
})

export default coffeeSlice.reducer;
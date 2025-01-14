import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (payload, thunkApi) => {
        try {
            const res = await axios.post(`${BASE_URL}/orders`, payload);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const singUp = createAsyncThunk(
    "order/singUp",
    async (payload, thunkApi) => {
        try {
            const res = await axios.post(`${BASE_URL}/orders/signUp`, payload);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const createOrderOffline = createAsyncThunk(
    "order/createOrderOffline",
    async (payload, thunkApi) => {
        try {
            const res = await axios.post(`${BASE_URL}/orders/offline`, payload);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const getAllOrders = createAsyncThunk(
    "order/getAllOrders",
    async (_, thunkApi) => {
        try {
            const res = await axios(`${BASE_URL}/orders`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
export const deleteOrder = createAsyncThunk(
    "order/deleteOrder",
    async (payload, thunkApi) => {
        try {
            const res = await axios.delete(`${BASE_URL}/orders/${payload}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const initialState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.orders.push(action.payload);
        });
        builder.addCase(createOrderOffline.fulfilled, (state, action) => {
            state.orders.push(action.payload);
        });
        builder.addCase(singUp.fulfilled, (state, action) => {
            state.orders.push(action.payload);
        });
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
        });
        builder.addCase(deleteOrder.fulfilled, (state, action) => {
            state.orders = state.orders.filter(
                (order) => order._id !== action.payload
            );
        });
    },
});

export default orderSlice.reducer;

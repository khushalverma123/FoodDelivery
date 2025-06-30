import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios";
import { forgetPasswordEndPoint } from "../../assets/constants/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const forgetPassword = createAsyncThunk(
    "auth/forgetPassword",
    async (credentials, { rejectWithValue }) => {

        try {
            const response = await axiosInstance.post(forgetPasswordEndPoint, credentials);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const forgetPasswordSlice = createSlice({
    name: "forgetPassword",
    initialState: {
        token: null,
        loading: false,
        error: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(forgetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.data.token;
                state.message = action.payload.message;
                AsyncStorage.setItem("resetToken", action.payload.data.token);
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});


export default forgetPasswordSlice.reducer;

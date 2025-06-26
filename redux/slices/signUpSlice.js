import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios";
import { SignUpEndPoint } from "../../assets/constants/urls";

export const signUpUser = createAsyncThunk(
  "signUp/signUpUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(SignUpEndPoint, credentials);
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

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      });
  },
});

export default signUpSlice.reducer;

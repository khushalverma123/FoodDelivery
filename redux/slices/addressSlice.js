// redux/slices/addressSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressList: [
    {
      id: "1",
      label: "HOME",
      icon: "home",
      address: "2464 Royal Ln. Mesa New Jersey 45463",
    },
    {
      id: "2",
      label: "WORK",
      icon: "home",
      address: "381 Ranchview Dr. Richardson California",
    },
  ],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addressList.push(action.payload);
    },
    deleteAddress: (state, action) => {
      state.addressList = state.addressList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;

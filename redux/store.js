import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import signupReducer from "./slices/signUpSlice"


export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});

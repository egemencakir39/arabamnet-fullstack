import { configureStore } from "@reduxjs/toolkit";
import carDataReducer from "@/redux/carDataSlice";
import authReducer from "@/redux/authSlice";

export const store = configureStore({
  reducer: {
    carData: carDataReducer,
    auth: authReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import balanceReducer from "./balanceSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    balance: balanceReducer
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "../features/AuthSlice"
import proReducer from "../features/institutionslice"
export const store = configureStore({
    reducer:{
        auth:authReducer,
        profile:proReducer
    }
})
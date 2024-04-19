import { configureStore } from "@reduxjs/toolkit";
// import serSlice from "./slices/UserSlices";
import productReducer from './slices/UserSlices'

const store = configureStore({
    reducer:{
        users: productReducer,
    }
})
export default store;
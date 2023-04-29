import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/couter/CounterSlice"
import ProductReducer from "../features/couter/product/ProductSlice";


export const Store = configureStore({
    reducer:{
        counter: CounterReducer,
        products: ProductReducer
    }
    
})
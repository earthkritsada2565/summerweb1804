import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:'products',
    initialState:{
        product:[
            {
                id: 0,
                name:'milk',
                price:100
            }
        ]
    },
    reducers:{
        insert:(state,action)=>{
            state.product = [...state.product,action.payload]
        },
        remove:(state,action)=>{
            state.product = [...state.product].filter(p=>p.id !== action.payload)
        }
        
    }

})
export const {insert,remove} = ProductSlice.actions
export default ProductSlice.reducer
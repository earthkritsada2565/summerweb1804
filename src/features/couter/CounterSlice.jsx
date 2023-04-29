import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        decrement:(state)=>{
            state.value -= 1
        },
        increment: (state)=>{
            state.value += 1
        },
        addten: (state,actions)=>{
            state.value += actions.payload
        }

    }
})

export const {decrement,increment,addten} = counterSlice.actions
export default counterSlice.reducer
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
           state.count=0
        },
        add_by_amount:(state,action)=>{
           state.count+=action.payload
        }
        
    }
})

export const {increment,decrement,reset,add_by_amount} = counterSlice.actions
export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


// We create a slice only for the counter. It contains the object which have the name of the slice,initialState of the slice,and a reducers object which contains all the actions.
const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        }
    }
})

// You can also export the actions of the slice.
export const counterActions = counterSlice.actions;
export default counterSlice;
import {configureStore, createSlice} from "@reduxjs/toolkit";

// Note = keys name must be fixed:
const counterSlice = createSlice({
    name:"counter",
    initialState:{
        counterVal:0
    },
    reducers:{
        inc:(prevState)=>{
           prevState.counterVal++;
        },
        dec:(prevState)=>{
            prevState.counterVal--;
        },
        add:(prevState,action)=>{
            prevState.counterVal += action.payload;
        },
        sub:(prevState,action)=>{
            prevState.counterVal -= action.payload;
        },
    }
});

const messageSlice = createSlice({
    name:"MessageState",
    initialState:false,
    reducers:{
        toggle:(state)=>{
            console.log("state",state);
            
            return !state;
        },
    }
})

// Note = reduces object keys name and the slices name but be similar.
export const reduxStore = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        MessageState:messageSlice.reducer,
    }
});


// Setting the actions:

export const counterActions = counterSlice.actions;
export const messageActions = messageSlice.actions;

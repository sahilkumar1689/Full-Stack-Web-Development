import { createSlice } from "@reduxjs/toolkit";

const bagItemSlice = createSlice({
    name:"bagItem",
    initialState:[],
    reducers:{
        addBagItem:(prev,action)=>{
            prev.push(action.payload);
        },
        deleteBagItem:(prev,action)=>{
           return prev.filter((elem,idx)=>elem.id !== action.payload)
        }
    }
});

export const bagItemAction = bagItemSlice.actions;

export default bagItemSlice;

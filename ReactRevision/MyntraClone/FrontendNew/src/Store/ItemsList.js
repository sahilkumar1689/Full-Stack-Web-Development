import { createSlice } from "@reduxjs/toolkit";
// import {items} from "../data/items";

const itemsListSlice =createSlice({
    name:"itemList",
    initialState:[],
    reducers:{
        addServerList:(prev,action)=>{
            return [...action.payload];
        }
    }

});

export const itemListActions = itemsListSlice.actions;

export default itemsListSlice;
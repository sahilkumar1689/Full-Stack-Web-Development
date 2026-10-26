import {configureStore} from "@reduxjs/toolkit";
import itemsListSlice from "./ItemsList";
import bagItemSlice from "./bag";

const reduxStore = configureStore({
    reducer:{
        itemList:itemsListSlice.reducer,
        bagItem:bagItemSlice.reducer,
    }
});

export default reduxStore;
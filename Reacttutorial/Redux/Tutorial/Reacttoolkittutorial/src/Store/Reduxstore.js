import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./Counter";

// Create a store using the react tool kit.In the react tool kit at the palce of reducer we pass a object which have a another object called reducer becuase reducer is also a object it contains the multiple reducers slices. Reducer slices create in the separated file.

const reduxStorage = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
});

export default reduxStorage;


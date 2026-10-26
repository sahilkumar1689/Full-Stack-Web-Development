import {configureStore, createSlice} from "@reduxjs/toolkit";

const todoListSlice = createSlice({
	name:"todoList",
	initialState:[],
	reducers:{
		add:(prev,action)=>{
			prev.push(action.payload);
		},
		delete:(prev,action)=>{
			let newArr = prev.filter((elem,idx)=>idx !== action.payload);
			return newArr;
		},
	}
})

const ReduxStore = configureStore({
	reducer:{
		todoList:todoListSlice.reducer,
	}
});

// Export the action:

export const TodolistActions = todoListSlice.actions;

export default ReduxStore;
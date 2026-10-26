import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    status:false,
    userData:null
}

const authSlice  = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(prevState,action)=>{
            prevState.status = true;
            prevState.userData = action.payload;
        },
        logOut:(prevState)=>{
            prevState.status=false;
            prevState.userData = null;
        }
    }
});

// Export Reducer:
export default authSlice;

// Export Actions:
export const {login,logOut} = authSlice.actions;
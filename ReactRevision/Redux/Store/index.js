import {createStore} from "redux";

const INITIAL_VALUE ={
    counter:0,
    privacyState:false
}

const reducer = (store=INITIAL_VALUE,action)=>{
    let newStore =store;
    if(action.type === "INCREMENT"){
        newStore = {...store,counter:store.counter+1};
    }
    else if(action.type === "DECREMENT"){
        newStore = {...store,counter:store.counter-1};
    }
    else if(action.type === "ADDITION"){
        newStore = {...store,counter:store.counter+ (action.payload.add)};
    }
    else if(action.type === "SUBTRACTION"){
        newStore = {...store,counter:store.counter - action.payload.sub};
    }
    else if(action.type === "Toggle"){
        newStore = {...store,privacyState:!store.privacyState};
    }
    return newStore;
}

export const reduxStore = createStore(reducer);


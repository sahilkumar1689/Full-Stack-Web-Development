// Create a redux Object:
const redux = require('redux');

// Create Intitial state:
const InitalValue = {
    counter : 0
}

// Create a reducer function:
function reducer(state = InitalValue,action){
    let newState = state;
    if(action.type === "Increment"){
        newState = {counter:state.counter+ 1}
    }
    return newState;
}

// Create store:
const store = redux.createStore(reducer);


// Create a subscriber1:
const subscriber1 = ()=>{
    let state = store.getState();
    console.log(state);
}

// Gave permission to the subscriber1 to access the store:
store.subscribe(subscriber1);


// Create an action need to be dispatched:
let action1 = {
    type:"Increment"
}

// Call the dispatch function:
store.dispatch(action1);



import {createStore} from 'redux';

const InitalValue = {
    counter:0
}

function reducer(store = InitalValue,action){
    let newState = store;
    if(action.type === 'Increment'){
        newState = {counter:store.counter+1};
    }
    else if(action.type === 'Decrement'){
        newState = {counter:store.counter-1};
    }
    return newState;
}

const reduxStorage = createStore(reducer);
console.log(reduxStorage);

export default reduxStorage;
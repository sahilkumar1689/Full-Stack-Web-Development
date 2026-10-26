import {create} from "zustand";


// 1. Here is the one way to use the zustand store just create and object and write every state and the action inside it and return that object.
// const zustandStore = create((set,get)=>{
// return {
//     // Here is the counter state and their actions:
//     counter:0,
//     add:()=>{
//         // See in redux action function by default get the prevState value but in the zustand we have a set function in which we use a callBack function and that function get you a prevState.
//         return set((prev)=>{
//             return {counter:prev.counter+1}
//         })
//     },
//     decrease:()=>{
//         // But here you can see you can also access the prevState using the get() function it basically return the object of initial state.
//         let newCounter =  get().counter - 1;

//         // But you have to call the set() function , because it is the only function who are able to change the state vale.
//         // console.log(get());

//         return set(()=>({counter:newCounter}));
//     },
//     addUserValue:(num)=>{
//         let newCounter = get().counter + num;
//         return set(()=>({counter:newCounter}));
//     },
//     deleteUserValue:(num)=>{
//         let newCounter = get().counter - num;
//         return set(()=>({counter:newCounter}));
//     },

//     // Here is the message state and their actions:
//     isShowMessage : 0,
//     setMessageState:()=>{
//         return set((prev)=>({isShowMessage:prev.isShowMessage?0:1}));
//     }

// }
// });

// export default zustandStore;

// 2. But incase you have complex states , so in that case you simply create a slice of that state and add it in the store,similarly we did in redux.You can also store these slices in the individual files.

const counterSlice = (set,get)=>{
    return {
        counter:0,
        add:()=>{         
            return set((prev)=>{
                return {counter:prev.counter+1}
            })
        },
        decrease:()=>{
            let newCounter =  get().counter - 1;
            console.log(get());
            return set(()=>({counter:newCounter}));
        },
        addUserValue:(num)=>{
            let newCounter = get().counter + num;
            return set(()=>({counter:newCounter}));
        },
        deleteUserValue:(num)=>{
            let newCounter = get().counter - num;
            return set(()=>({counter:newCounter}));
        },
    }
}

const messageSlice = (set,get)=>{
return {
    isShowMessage : 0,
    setMessageState:()=>{
        return set((prev)=>({isShowMessage:prev.isShowMessage?0:1}));
    }
}
}

const zustandStore = create((set,get)=>{
    return {
        ...counterSlice(set,get),
        ...messageSlice(set,get)
    }
})
export default zustandStore;
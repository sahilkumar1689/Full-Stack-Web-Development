import { useCallback, useReducer } from "react";
import "./App.css";
import { useState, useMemo } from "react";
import Navbar from "./Components/Navbar";

// 1. Context Api = So,till know we see the "useState" and "useRef".When ever we need to store and change the value dynamically using the handlers then we use "useState" but when we need the refrence of any element and we change the state of that element according to the event occur then we use the "useRef". But there is one more problem arrise, is "props Drilling". Props Drilling is defined as a we pass the state from parent to child in a very deep level and most of the level are only used for accept the state from its parent and pass the state to its child they even no need it.Similarly we pass handlere function as a props to a very deep level and most of the level only used for only accept the handler function from its parent and pass the their children even they really no need it.
// So to handle this problem we use the contex api.Basically context api is a type of hook which is used to provide the context about anything they store.So,in simple terms context api is nothing but a storage which is used to store the content or the functionallity and allow any one to use that functionality.
// Steps to use the Context api:
// 1.We use a context api storage in another file with the hook called      "createContext(Provide_the_Blueprint_of_what_type of_value_Store_init)" after that we store it in a variable and we export that variable.
// 2. We need to import that tag as a variable and use that variable as a custom tag with syntax:
/*
  <Variable_name.Provider value={Pass_what_you_want_to_store_according_to_the_blueprint}>
  ...
  </Variable_name.Provider>
*/
//and Inside custom tag we place those element who have access to use that storage.

// 3. After that in any component can use it by simply using hook called "useContext(storage_file_name)".It pass the data stored in the context.After that it your responsibility how you can use it.

// Note = 1. Visite todoversion4 to see practicall implimentation.
// 2. If you create a simple website in which the porps drilling go below 2,3,4 level then not use context api but if you create a big website in which the the porps drilling go beyond 3,4 level then definately use context api.

// 2. useReducer Hook = It's also a type of hook and its working similar to the "useState" but it is more strict in the comparison of "useState" or we can say that it is the updated version of "useState".Basically it is used when the "useState" logic become very complex to handle it means multiple handlers try to change the "useState".Basically in "useState" they accept only one thing the initial value and return a array of two things which contain the state and the setState function.It is a by default function in which we only pass the data and they automatically change the state. But in "useReducer" it accept two things the "reducer" function and the "initial State" and after that it return an array of two thing one is the state and the second is the dispact function which is also called the customSetState function or we can say that the refrence of "reducer" function.Basically in "useReducer" we create a custom function in which we add our custom functionality called "reducer",it is basically a pure function which take two paremeter one is by default parameter you no need to give, is called current state and the second is action.Now action is basically a kind of object in which me have "type" variable  and the "data" object which also contain the data need to be changed and it passed inside the dispact function .But more important thing in "reducer" function is it always return the newState.

// Note = 1. Visite the Todoversion5 for a complete practicall implementation.
// 2. Always use "useReducer" when there is mulitple handler try to change the "useState".

// e.g. = Simple Example:

// Pure Function:
function reducer(currentState, action) {
  let newState = currentState;
  if (action.type == "Increment") newState++;
  else if (action.type == "Decrement") newState--;
  return newState;
}

// 4. useEffects = It is a special hook which is used to run the set of code on the basic of some condition or initally.It means that in the socialmedia project we fetch data after click on the button but generally in website the data fetches in the initial state of the website it means in the starting of the website and only ones it does'nt fetch continously when repaint any component it only fetch at the inital stage of the website.This can be achieved by using the "useEffect" hook.It take two parameter the first parameter is the anonymous function in which we write our fetch data code and second parameter can be dependency array.
// Basically it is used because it does'nt call the code during any repaint cycle.It run only at the initial state of the website or the particular component.

// useEffect Cleaning up = Basically inside the anonymous function of the useEffects at the last we can also return a another anonymous function which clean up the useEffect code.It is important because suppose you fetch data or you know it takes some delay to fetch data in that delay if user change the state of any component then there is no meaning to fetch data continously it that case because your component is died and new component is added in the DOM tree.So in that case you want the data fetching is aborted when your the component died.So that code write inside the anonymous function and return at the last of the useEffect anonymous function which call only when your components died.

// Note = 1. For practical implementation go socialmediatype2 and bharatclock2.
// 2. Whenever you want your specific code run in the initial state of the website but not run during any repaint cycle then use the useEffect.e.g. = During data fetching or timeInterval tasks.

// 5. useMemo = It is a advanced type of hook which is used for optimization purpose.Basically,some time we done some heavy computation in our component example try to sort an large array whenever they come from any props or handler function.But we might have more than one states in the particular components so we know that whenever any state changes all the component rerender.So in that case that particular high computational task also rerender again but actaully we don't want that high computaion done again and again we only want they rerender only when their value changes in this case we use "useMemo(anonymousFunction,dependancyArray)".
// e.g.:
// Create a large array:
let largeArray = new Array(3000000).fill(0).map((_, i) => {
  return {
    index: i,
    magicalNumber: i === 2900000,
  };
});
console.log(largeArray);

// 6. useCallback = It is used to freeze the function. So that it can't rerender during the change state of any other component.Syntax similar to the "useMemo".Basically it is used when you want your component rerendering depends upon its state not the other state.

function App() {
  // 2. e.g.:
  const [count, setCount] = useReducer(reducer, 0);
  // 5. e.g.:
  const [number, setNumber] = useState(largeArray);

  let magical = useMemo(
    () => number.find((elem) => elem.magicalNumber === true),
    [number]
  );

  let incrementHandler = () => {
    let action = {
      type: "Increment",
    };
    setCount(action);
  };

  let decrementHandler = () => {
    let action = {
      type: "Decrement",
    };
    setCount(action);
  };

  // 6. e.g.:
  let [headingCount, setHeadingCount] = useState(0);

  let setHeadCount = useCallback(() => {
    setHeadingCount(headingCount + 1);
  }, [headingCount]);

  return (
    <>
      {/* 6. e.g.: */}
      <Navbar headingCount={headingCount} setCount={setHeadCount}></Navbar>

      <span
        style={{
          marginLeft: "70px",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        {count}
      </span>
      <div className="btnContainer">
        <button onClick={incrementHandler}>Increment</button>
        <button
          onClick={decrementHandler}
          style={{ marginLeft: "10px", marginTop: "20px" }}
        >
          Decrement
        </button>

        <span>{magical.index}</span>
      </div>
    </>
  );
}

export default App;

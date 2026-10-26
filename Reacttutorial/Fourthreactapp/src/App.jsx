import Container from "./Components/Container";
import ParentBtn from "./Components/childBtn";
import Container2 from "./Components/Container2";
import ErrorMessage from "./Components/ErrorMessage";
import FoodList from "./Components/FoodList";
import InputItems from "./Components/InputItems";
import "./App.css";
import { useState } from "react";

// 1. Passing childerens in props = Till now we only know that we can pass attributes in our custom tags and after that we can use it using props in the components function.We can also use the object destructuring.But now what if i tell you that you can also pass the html elements inside the custom componets and you can also use it similar you use your "props" by using the "props.childeren" because what ever html elements you pass inside the custom tag pass in the form of object with key name "children". You can aslo use the object destructuring.

// 2. Event Handling = Event Handling is similar to the javascript event handling.e.g. onClick,onChange,onKeyDown,etc.

// 3. Pass Functions in props = Till know we see we can easily pass the children elements and data via props but we can also pass the functions via props.It is basically used for event handling it means parent decide the data and event Handler need to be show or execute by their childrens.It is also known as child to parent communication.

// 4. Change The state = Bascially,till know we only know how to handle event listner and print message in the console.But in order to change in the UI elements in react actually on the basis of event Listner we need to use "useState()" mechanisms. In this we pass the inital value of any UI element as a argument.After that it return two thing first the value of the UI element and second the function which is used to change the UI elements and also render all the their child elements who use it automatically.

function App() {
  // 1. e.g.:
  let arr = [1, 2, 3, 4, 5];

  // 2. e.g.:
  let btnClick = (event) => {
    console.log(event.target);
  };

  let inputChange = (event) => {
    console.log(event.target.value);
  };

  // 3. e.g.:
  let btnHandler = (event) => {
    console.log(event.target);
  };

  // 4. e.g. :
  // You clearly see the initial value is 0 store in the count and function which is responsible for the changes is store in the changeCount.
  let [count, changeCount] = useState(0);

  // Minor Project:
  // let HealtyFoodArr = ["Milk", "Roti", "Green Vegetables", "Fruits", "Butter"];
  // let inputText = "Entered Items is:";

  let [HealtyFoodArr, changeHealthFoodArr] = useState([]);
  let [inputText, inputTextChange] = useState("Entered Items Is:");

  let inputHandler = (details) => {
    console.log(details.target.value);
    if (details.key == "Enter") {
      inputTextChange(details.target.value);
      changeHealthFoodArr([...HealtyFoodArr, details.target.value]);
      details.target.value = "";
    }
  };

  return (
    <>
      {/* 1. e.g. = Clearly see we pass the multiple attributes and also pass the html elements.Now all this thing pass in the form of object.After that you can use it via "props" or object destructing */}
      <Container tempData1="temp1" tempData2="temp2" tempData3={arr}>
        <h1>Hello Child of Props element.</h1>
      </Container>
      {/* 2. e.g.: */}
      <button onClick={btnClick}>Click Me</button>
      <br /> <br />
      <input type="text" onChange={inputChange} />
      {/* 3. e.g.: */}
      <br /> <br />
      <ParentBtn ParentHandler={btnHandler}></ParentBtn>
      <br />
      <br />
      {/* 4. e.g.: */}
      <button onClick={() => changeCount(count++)}>count is:{count}</button>
      {/*  Simply make a minor project in which we use all the above concepts and also understand a new topic called states. Make a healthy food items menu card.*/}
      <br />
      <br />
      <Container2>
        <h1 className="Heading">Healthy Food Items:</h1>
        <InputItems inputHandler={inputHandler}></InputItems>
        <p>{inputText}</p>
        <ErrorMessage foodItemsData={HealtyFoodArr}></ErrorMessage>
        <FoodList foodItemsData={HealtyFoodArr}></FoodList>
      </Container2>
    </>
  );
}

export default App;

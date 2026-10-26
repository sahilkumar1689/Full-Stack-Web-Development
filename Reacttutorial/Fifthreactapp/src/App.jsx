import { useRef } from "react";
import "./App.css";

// 1. React Icons = Basically,react has a very big library of icons so we can easily use that library and use their icons.
// Steps:
// 1. Run command in the terminal "npm install react-icons -save";
// 2. After that go to react icons website and choose you favourite icons and copy their import syntax and added in the top of your file.
// 3. After that use those icons in the form of tag.
// e.g.:

// 2. useRef Hook = In todo list project we see clearly that in order to get data from the input we need to use the "onchange" handlers and also need to change their states by using "useState" hook but the disadvantage of this method is that when ever we enter any thing the state change and after that automatically the whole UI repaint which use that state.But in generally what we need we only need the value of the input when the button clicked.So,in that senarious where we only need the reference of any particular element and change their state whenever we need it we use the "useRef" hooks.We simply attached hook to any element using "ref" attributes.
import { FaReact } from "react-icons/fa";
import { useState } from "react";

// 4. Forms = In todo project we see clearly we get value of input by using "states" or previously we see a new method called "useRef" but there is one more method to get the value of inputs in one go by using form tag.In form tag we add "onSubmit" event handler after that we simply get the "event or details" of that form and we prevent the default behaviour of the form by using "e.preventDefault()" basically the default behaviour of the form is render the data on the server whenever the submit button clicked inside the form.After that we can get all the values of the inputs by using the "events or details".

function App() {
  // 2. e.g.:
  // We simply make a reference state.
  let inputVal = useRef();

  // Simply save the final state of the inputVal for understanding the concept 3.
  let [finalInputValues, setFinalInputValues] = useState([]);

  let getInputVal = () => {
    console.log(inputVal.current.value);

    // Old Technique or not very optimized technique:
    // setFinalInputValues([...finalInputValues, inputVal.current.value]);

    // 3. New Technique How to add new state of the component.In this we simply run the anonymous function and pass th
    setFinalInputValues((currentVal) => [
      ...currentVal,
      inputVal.current.value,
    ]);
    console.log(finalInputValues);
  };

  // 4. e.g.:

  let getFormData = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  };
  return (
    <>
      {/* 1. e.g.: */}
      <FaReact className="icon"></FaReact>

      {/* 2. e.g.: */}
      <input type="text" ref={inputVal} />

      <button onClick={getInputVal}>Click</button>

      {/* 4.e.g.: */}
      <br />
      <br />
      <form onSubmit={getFormData}>
        <input type="text" />
        <input type="text" />
        <button>Click</button>
      </form>
    </>
  );
}

export default App;

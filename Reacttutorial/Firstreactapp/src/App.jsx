import "./App.css";

// 1. Now we talk about the react components.Basically react components is nothing but a simple javascript function which return some "html type content" it means it return the html but it is not the actuall html it is the JSX ,it stands for javascript XML.It is written inside the ".jsx" file.After that we can treat those "jsx" component as a html code and we can add styling to those as we done in the vanilla html,css.But you need to import that file in the header.We can also add tailwind and bootstrap.

// e.g.:

function App() {
  return (
    <div className="parentDiv">
      <h1>Hello World</h1>
    </div>
  );
}

// After creating the component you need to export it so that we can use this component in any file by simply import it.
// Now there are many ways to export the components:
// 1. By using export default = It is used to export only single component.
// e.g.:
export default App;

// 2. By using export named = It is used to export more than one componets but when we import it,we need to use the curly backets.

// e.g.:

export function ButtonComponent1() {
  return (
    <div className="">
      <button>Button Component1</button>
    </div>
  );
}

export function ButtonComponent2() {
  return (
    <div className="">
      <button>Button Component2</button>
    </div>
  );
}

// Note = 1. One thing you need to keep that in your mind, is that always make a components with the starting capital letter.It is the naming convention of the react components.

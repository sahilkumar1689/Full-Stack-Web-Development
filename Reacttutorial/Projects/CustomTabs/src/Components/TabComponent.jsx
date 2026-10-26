import React, { useState } from "react";
import TabBtns from "./TabBtns";
import TabContents from "./TabContents";

const tabData = {
  Components: {
    title: "React Components",
    description:
      "Components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen.",
    syntax: `// Function Component
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    // Class Component
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }`,
  },
  JSX: {
    title: "JSX (JavaScript XML)",
    description:
      "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like.",
    syntax: `const element = <h1>Hello, world!</h1>;
    
    const name = 'John';
    const element = <h1>Hello, {name}!</h1>;
    
    const element = (
      <div>
        <h1>Hello!</h1>
        <p>Good to see you here.</p>
      </div>
    );`,
  },
  Props: {
    title: "Props",
    description:
      "Props (short for properties) are how components receive data from their parent. They are read-only and help make your components reusable.",
    syntax: `// Parent Component
    function App() {
      return <Welcome name="Sara" />;
    }
    
    // Child Component
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
  },
  Reactjs: {
    title: "React.js",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page. The main purpose of React is to be fast, scalable, and simple.",
    syntax: `import React from 'react';
    import ReactDOM from 'react-dom/client';
    
    function App() {
      return <h1>Hello World!</h1>;
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);`,
  },
  State: {
    title: "State",
    description:
      "State is a JavaScript object that stores a component's dynamic data and determines the component's behavior. When the state changes, the component re-renders.",
    syntax: `import React, { useState } from 'react';
    
    function Counter() {
      // Declare a state variable named "count" with initial value 0
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }`,
  },
};

function TabComponent() {
  const [tabValue, setTabValue] = useState(null);

  return (
    <>
      <div className="navContainer">
        <ul>
          {Object.keys(tabData).map((elem, idx) => {
            return (
              <TabBtns
                key={idx}
                tabName={elem}
                isActive={tabValue === elem}
                clicked={() => setTabValue(elem)}
              />
            );
          })}
        </ul>
      </div>

      <div className="contentContainer">
        {tabValue ? (
          <TabContents data={tabData[tabValue]} />
        ) : (
          <p>Please Select Any Tab To View.</p>
        )}
      </div>
    </>
  );
}

export default TabComponent;

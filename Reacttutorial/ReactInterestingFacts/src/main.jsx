import { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// 1. You clearly see that you can also write the function in the same file and use it directly as a component.
function Mytemp() {
  return <p>My Temp Function.</p>;
}

// 2. You also use the variable to sent the html.Because you need to understand react only need the html to render,so you sent the html using the function or by using the variable.Hardly matters but recommended to use the function because it have the props functionality.
let obj1 = <p>Hello I am paragraph.</p>;

// 3. Here is one interesting thing behind the scene react create the exact following objects of your given html tags and render.And it can also provide the function to create automaically that object and return the html in the object format.
let obj2 = createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click Me"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Mytemp />
    {Mytemp()}
    {obj1}
    {obj2}
  </StrictMode>
);

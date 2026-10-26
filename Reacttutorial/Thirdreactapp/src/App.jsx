import ListItems from "./Components/list";

// 1. Fragments = Basically,we know in jsx we create a function and a function return some html element. But we also know that we return only one element in one turn,but if we need to return more than one elements at a time we need to wrap in a unnecessary parent div.So, to avoid it we use react fragments.React fragments is a way to return more than one elements at a time but without parent div.At the time of rendeering react automatically remove that fragment tag and render the inner elements.
// There are two ways to add fragments:
// 1. <React.fragments></React.fragments> // To use this you firstly need to import the React from "react".
// 2. <></>

// 2. Map Method = You know in javascript,map method is used to apply specific functionality on every element of the array and return the new element.Similary in react it used to render the list from the array data.It means your data is present in the array and you apply map method on that array inside the jsx and you render the array data in the specific elements and it return that specific html tag.

// 3. Conditional Rendering = It means we render any element on the basis of some conditions.
// There are three methods:
// 1. Using if-else Condition
// 2. Using ternary operator inside curly brackets "{}"
// 3. Using "&&" opertor.

// 4. Props = Props stand for properties. It is used to add pass values between the parent and the child elements. Suppose there is a data present in the array of object present in the parent component i.e. App.jsx,but inside the parent component there are some child component which declared in the other files but they also used that same parent components data,so in that case we pass the parent data as a "attributes" and after that in the components file we catch it as a "parameter" in parameter we store the "object" and after that read values by using the "." operator.

// 5. Css Modules = It is used for creating component specific styles.Also avoid global name conflicts.Bacially when we try to gave specific style to the components there must be a case arises where any other component use that same className so the conflicts arises,so to solve that problem we use the css modules.It basically gave the locall class name to the elements to avoid name conflicts.So it is recommended if you want to apply the specific styling on the componets always use the css module.

// Steps to create css module:

// 1. Firstly make a file at the same level of your component and give the same name you give in the components file but concat the ".module.css" extension at the end.

// 2. Inside that file write you normal css.

// 3. After that to use that css we need to import it inside the component file.But it is slightly different from the other css import:
// Syntax:
// "import variable_name from 'file_path' "
// Where; varibel_name = It is the varibale which store the styling in object format.After that you can easily apply style using "." dot operator in side the className.

function App() {
  // 2. e.g.:
  // let arr = [];
  let arr = [
    "First List Heading",
    "Second List Heading",
    "Thisd List Heading",
    "Fourth List Items",
    "Fifth List Items",
  ];
  // 3. e.g.:

  // if (arr.length == 0) {
  //   return <h4>No Items Available</h4>;
  // }

  return (
    // 1. e.g.:
    // <>
    //   <h1>Heading:</h1>
    //   <ul>
    //     <li className="list-items">First List Items</li>
    //     <li className="list-items">Second List Items</li>
    //     <li className="list-items">Third List Items</li>
    //     <li className="list-items">Fourth List Items</li>
    //     <li className="list-items">Fifth List Items</li>
    //   </ul>
    // </>

    // 2. e.g.:
    // <>
    //   <h1>Heading:</h1>
    //   <ul>
    //     {arr.map((element) => (
    //       <li key={element} className="list-items">
    //         {element}
    //       </li>
    //     ))}
    //   </ul>
    // </>

    // 3. e.g.:
    // <>
    //   <h1>Heading:</h1>

    //   {/* {arr.length == 0 ? <h4>No items Available</h4> : null} */}
    //   {/* {arr.length == 0 && <h4>No items Available</h4>} */}

    //   <ul>
    //     {arr.map((element) => (
    //       <li key={element} className="list-items">
    //         {element}
    //       </li>
    //     ))}
    //   </ul>
    // </>

    // 4. e.g.:

    <>
      <h1>Heading:</h1>
      <ul>
        {arr.map((element) => (
          // Clearly see pass value in the form of attributes.
          <ListItems data={element}></ListItems>
        ))}
      </ul>
    </>
  );
}

export default App;

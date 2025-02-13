import React from "react";
import ReactDOM from "react-dom/client"

// this is  basic example of react
// const heading = React.createElement("h1",{id: "heading"}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

/** To create nested strucutre like this
 * <div id="parent1">
 *    <div id= "child1">
 *       <h1>I'm H1 tag</h1>
 *       <h2>i'm h2 tag </h2>
 *    </div>
    * <div id= "child2">
    *       <h3>I'm H3 tag</h1>
    *       <h4>i'm h4 tag </h2>
    *    </div>
 * </div>
 */

/** Example 2
   const parent = React.createElement("div",
   {id: "parent"},[
      React.createElement("div", {id: "child1"}, [
         React.createElement("h1", {}, "I'm h1 tag"),
         React.createElement("h2", {}, "I'm h2 tag")
      ]),
      React.createElement("div", {id: "child2"}, [
         React.createElement("h3", {}, "I'm h3 tag"),
         React.createElement("h4", {}, "I'm h4 tag")
      ]),
   ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
//passing a react element inside the root
root.render(parent);
 * */

//Example 3
// Using JSX, which is different way of reactElement
//JSX (trasnpiled before it reaches JS engine) Parcel - Bable
// const jsxHeading = <h1 id="heading" className="head">Namaste React using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// //passing a react element inside the root
// root.render(jsxHeading);

//React Functional component - Returns JSX/React Element, uses Capital letter in function name
const Title = () => {
   return <h1>This is title component</h1>
}

//Component Composition
const HeadingComponent = () => (
<div id="heading">
<Title />
<h1>This is heading component</h1>
</div>
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent/>);



//Adding JS in JSX using curly braces
const number = 1000;
const ElementHeadingComponent = () => <h3> I'am basic heading component</h3>
// to use element in component , treat it as variable and to use component inside element use <>
const elem = (
   <div>
   <h3> Examples</h3>
   <ElementHeadingComponent />
   <ElementHeadingComponent></ElementHeadingComponent>
   {ElementHeadingComponent()}
   <span> I am element having component in it</span>
   </div>
)
const  JStitlecomponent = () => (
   <div id="container">
      <h2>{number}</h2>
      {elem} 
      <h1>This is heading component with JS and element in it</h1>
   </div>
)
root1.render(<JStitlecomponent/>)





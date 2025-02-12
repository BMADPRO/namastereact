
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


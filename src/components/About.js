
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = ()=> {
//     return (
//         <div>
//             <h1> About US</h1>
//             <User name={"HEllo Jo"}/>
//             <UserClass name={"Hello joyo(class)"}/>
//         </div>
//     )
// };

//As a class
class About extends Component{
  constructor(props){
    super(props);
    console.log("parent constructor");
  }

  componentDidCatch(){
    //this is callled once render fn is completed
    console.log("parent componentdimount");
  }

  render(){
    console.log("parent render");
    return(
        <div>
            <h1> About US</h1>  
            <UserContext.Consumer>
              {({loggedInUser})=> (
                <h1 className="text-xl font-bold">{"This is "+ loggedInUser}</h1>
              )}
            </UserContext.Consumer>
            <UserClass name={"Hello Child 1(class) and parent about class"}/>
            <UserClass name={"Hello child 2"}/>
        </div>
    )
  }
}
export default About;

//In case of child1 and child2
/**https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * 
 * parent Const> parent render> child1 const> child1 render> child2 const> child2 render>
 * {DOM manipulation happens now} 
 * >child 1 demount > child 2 demount> parent demount
 * 
 * Render phase(constructor and render)
 * 
 * commit phase(demount) will batch the render phase for both two childs
 * It is happening because it will trigger DOM manipulation and it is costly operation, All child commponents are 
 * rendered then commit phase happen altogether, which makes it fast.
 */


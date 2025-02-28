//Named import - curly braces
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
   const [btnName, setBtnName] = useState("Login");
   const {loggedInUser} = useContext(UserContext);
    return (
       <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
         <div className="logo">
             <img className="w-32" src={LOGO_URL }></img>
           </div>
           <div className="flex items-center">
             <ul className="flex p-4 m-4">
                <li className="px-4">
                <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                <Link to="/about">About</Link>
                </li>
                <li className="px-4">Contact Us</li>
                <li className="px-4">Cart</li>
                <button className="login-btn"
                onClick={()=>{
                 btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
             </ul>
           </div>
       </div>
       
    )
 };

 export default Header;
 
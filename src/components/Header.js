//Named import - curly braces
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
   const [btnName, setBtnName] = useState("Login")
    return (
       <div className="header">
           <div className="logo">
             <img className="logo-img"src={LOGO_URL }></img>
           </div>
           <div className="nav-links">
             <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn"
                onClick={()=>{
                 btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
             </ul>
           </div>
       </div>
       
    )
 };

 export default Header;
 
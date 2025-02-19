//Named import - curly braces
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
   const [btnName, setBtnName] = useState("Login")
    return (
       <div className="header">
           <div className="logo">
             <img className="logo-img"src={LOGO_URL }></img>
           </div>
           <div className="nav-links">
             <ul>
                <li>Home</li>
                <li>Sign In</li>
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
 
//Named import - curly braces
import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
             </ul>
           </div>
       </div>
       
    )
 };

 export default Header;
 
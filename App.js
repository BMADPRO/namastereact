import React from "react";
import ReactDOM from "react-dom/client"

/**
 * -Header
 *  - Logo
 *  - Nav bar
 * -Body
 *  -Search bar
 *  -Restaurant container
 *    -Name, cuisine, ETA, rating
 * -Footer
 *  -copyright
 *  - adreess
 */

const Header = () => {
   return (
      <div className="header">
          <div className="logo">
            <img className="logo-img"src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
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
}

const RestaurantCard = () => {
   return (
      <div className="res-card" style={ {backgroundColor: "lightblue"}}>
         <img className="card-img" 
           alt="card-img"
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/wpw09wikehogd62sxz8m"
         ></img>
         <h2>Chulha Chowki</h2>
         <h3>North Indian, Chinese</h3>
         <h3>4.4 stars</h3>
         <h3>40 mins</h3>
      </div>
   )
}

const Body = () =>{
   return (
      <div className="body">
         <div class="search">Search</div>
         <div class="res-container">
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         </div>
      </div>
   )
}
const AppLayout = () => {
   return (
      <div className="app">
       <Header/>
       <Body/>
      </div>
   )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
   const [userName, setUserName] = useState();

useEffect(()=>{
//Make auth call to get username and password
const result = {
   userName: "Jyoti Mittal"
};
setUserName(result.userName);
console.log(userName)
}, []);

   return (
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
         <div className="app">
         {/**We can have different usercontext with different data for a block */}
       {/* <UserContext.Provider value={{loggedInUser : "Elon Mask", setUserName}}> */}
       <Header/>
       {/* </UserContext.Provider>   */}
      
       <Outlet/>   {/**outlet will be replaced in DOM */}
      </div>
      </UserContext.Provider>
      
   )
}
const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/",
            element: <Body/>,
         },
         {
            path: "/about",
            element: <About/>,
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>
         }
      ],
      errorElement: <ErrorPage/>
   },
   
]);


const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<AppLayout/>) 

root.render(<RouterProvider router = {appRouter}/>);
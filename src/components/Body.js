import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"; 
import { useState } from 'react';



const Body = () =>{
    //Array de-structuring, useState is react hook which return Array
    const [listofRestaurants, setListOfRestaurants] = useState(resList); 
    return (
       <div className="body">
          <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                const filterLists = listofRestaurants.filter(res=>
                    res.info.avgRating > 4.5
                );
                //using this set fn to re-trigger DOM
                setListOfRestaurants(filterLists);
            }}>
                Top Rated restaurants
            </button>
          </div>
          <div className="res-container">
          {/* <RestaurantCard resName="KFC" resRating= "4.4"/> */}
          {/* <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]}/> */}
          {listofRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
          </div>
       </div>
    )
 };

 export default Body;
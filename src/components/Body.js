import RestaurantCard, {withPromotedRestaurantCard} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Array de-structuring, useState is react hook which return Array
  //using resList with dummy data
  // const [listofRestaurants, setListOfRestaurants] = useState(resList);

  //using swiggy live data
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [ filteredListOfRestaurants, setFilterredListOfRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const RestaurantCardPromoted = withPromotedRestaurantCard(RestaurantCard);
  const {loggedInUser, setUserName} = useContext(UserContext);
 
  /**
   * useEffect is to load data after rendering i.e. re-rendering, takes two arguments
   * - callback fn called after UI render
   * - dependency array
   */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listofRestaurants);
  };

  //conditional rendering
  // if(listofRestaurants.length === 0){
  //     //return <h1>Loading...</h1>
  //     return <ShimmerUI />
  // }

  //using ternary operator
  return listofRestaurants && listofRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const searchList = listofRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              setFilterredListOfRestaurants(searchList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filterLists = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            //using this set fn to re-trigger DOM
            setListOfRestaurants(filterLists);
          }}
        >
          Top Rated restaurants
        </button>
        </div>
        <div className="m-4 p-4">
          <label className="font-bold">UserName :</label>
          <input type="text" className="border border-black px-2 m-2 rounded-md"value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {/* <RestaurantCard resName="KFC" resRating= "4.4"/> */}
        {/* <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]}/> */}
        {(filteredListOfRestaurants || []).map((restaurant) => (
          <Link to={"/restaurants/"+restaurant.info.id}>
          {
            restaurant?.info?.sla?.deliveryTime < 28 ? <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant}/>
            :<RestaurantCard key={restaurant.info.id} resData={restaurant} />
          }
         
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

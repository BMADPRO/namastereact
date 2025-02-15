import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  //Array de-structuring, useState is react hook which return Array
  //using resList with dummy data
  // const [listofRestaurants, setListOfRestaurants] = useState(resList);

  //using swiggy live data
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [ filteredListOfRestaurants, setFilterredListOfRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {/* <RestaurantCard resName="KFC" resRating= "4.4"/> */}
        {/* <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]}/> */}
        {(filteredListOfRestaurants || []).map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

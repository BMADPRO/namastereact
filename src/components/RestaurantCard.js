import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // const {resName, resRating} = props;
    const {resData} = props;
    const {name ,cuisines, avgRating,costForTwo, cloudinaryImageId} = resData.info;
    const {loggedInUser} = useContext(UserContext);
    return (
       <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
          <img className="rounded-lg" 
            alt="card-img"
            src={CDN_URL+ cloudinaryImageId}
          ></img>
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(',')}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{loggedInUser}</h4>
       </div>
    )
 };

 export default RestaurantCard;

 //Higher order function

 //Input RestaurantCard component ==> RestaurantCardPromoted Component

 export const withPromotedRestaurantCard = (RestaurantCard) =>{
   return (props) =>{
      return(
         <div>
            <label className="absolute bg-black text-white m-4 p-2 rounded-lg">Fast Delivery</label>
            <RestaurantCard {...props}/>
         </div>
      )
   }

 };
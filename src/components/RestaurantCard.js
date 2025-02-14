import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // const {resName, resRating} = props;
    const {resData} = props;
    const {name ,cuisines, avgRating,costForTwo, cloudinaryImageId} = resData.info;
    return (
       <div className="res-card" style={ {backgroundColor: "lightblue"}}>
          <img className="card-img" 
            alt="card-img"
            src={CDN_URL+ cloudinaryImageId}
          ></img>
          <h2>{name}</h2>
          <h3>{cuisines.join(',')}</h3>
          <h3>{avgRating} stars</h3>
          <h3>{costForTwo}</h3>
       </div>
    )
 };

 export default RestaurantCard;
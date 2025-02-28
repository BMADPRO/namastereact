import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  //this will control the state of child component
  const [ showItems, setShowItems] = useState(0);
  const {loggedInUser} = useContext(UserContext);
  

  if (resInfo === null) return <ShimmerUI />;
 
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (data)=> 
    data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories)

  return (
    <div className="text-center">
    <h1 className="text-left px-20 italic font-bold">{"Hello, "+loggedInUser}</h1>
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(',')}-{costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul> */}
      {categories.map((category, index) =>
        <RestaurantCategory key={category.card.card.title} 
        data={category.card.card}
        showItems={index === showItems ? true : false}  
        setShowItems={()=>setShowItems(index)}
        />
        //setShowItems will be passed as a fn in child component and when it will called on handleclick it will set the index of that as showindex
      )}
    </div>
  );
};

export default RestaurantMenu;

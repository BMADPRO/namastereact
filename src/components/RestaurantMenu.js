import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;

  const { text } = resInfo?.cards[0]?.card.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{text}</h1>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name}: Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

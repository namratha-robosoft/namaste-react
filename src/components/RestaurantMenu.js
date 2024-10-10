import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(false);
  if (resInfo === null) return <Shimmer />;

  const { id, name, costForTwo, cuisines } = resInfo.cards[2].card.card.info;
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-2 pt-24 max-w-[800px] mx-auto min-h-[800px]">
      <h2 className="text-2xl text-slate-600 font-bold">{name}</h2>
      <div className="mt-2 w-12 bg-green-600 pt-1"></div>
      <div className="pt-4">
        <span className="pt-4 font-bold text-sm">Rs. {costForTwo / 100}</span>
        <span className="pt-4 font-bold text-sm">{cuisines.join(", ")}</span>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            index === showIndex ? setShowIndex(null) : setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

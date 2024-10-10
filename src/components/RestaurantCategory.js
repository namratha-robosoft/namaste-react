import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const handler = () => {
    setShowIndex();
  };
  return (
    <div className="mt-2 bg-slate-50 shadow-md">
      <div className="mt-4">
        <h3
          onClick={handler}
          className="pt-4 pb-2 text-neutral-500 font-extrabold  p-4 mb-3 cursor-pointer"
        >
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length})
          <span className="float-right">🔽</span>
        </h3>
      </div>
      <div>
        {showItems && <ItemList itemCards={category?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

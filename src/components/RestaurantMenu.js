import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { MENU_IMAGE_LINK } from "./utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { id, name, costForTwo, cuisines } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards[0].card.info);
  return (
    <div className="px-2 pt-24 max-w-[800px] mx-auto min-h-[800px]">
      <h2 className="text-2xl text-slate-600 font-bold">{name}</h2>
      <div className="mt-2 w-12 bg-green-600 pt-1"></div>
      <div className="pt-4">
        <span className="pt-4 font-bold text-sm">Rs. {costForTwo / 100}</span>
        <span className="pt-4 font-bold text-sm">{cuisines.join(", ")}</span>
      </div>

      <h3 className="pt-4 pb-2 text-neutral-500 font-extrabold">
        Recommended ({itemCards.length})
      </h3>
      <hr></hr>
      <ul className="p-4">
        {itemCards.map((item) => (
          <li className="py-4 border-b-2" key={item.card.info.id}>
            <div className="flex justify-between">
              <div>
                <span className="p-[2px] rounded-md border-2 text-xs">
                  {item.card.info.isVeg ? "🟢" : "🔴"}
                </span>
                <h2 className="font-medium"> {item.card.info.name}</h2>
                <h4 className="font-light pt-4">
                  Rs.
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                </h4>
              </div>
              <div>
                <img
                  className="w-[100px]"
                  src={MENU_IMAGE_LINK + item.card.info.imageId}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

import { CDN_LINK } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="m-4 p-2 w-[200px] bg-gray-100 shadow rounded-lg min-h-96">
      <img
        className="h-44 w-44"
        src={CDN_LINK + cloudinaryImageId}
        alt="restaurant"
      />
      <h2 className="text-center text-slate-500 p-2 font-bold">{name}</h2>
      <p className="text-center font-thin text-sm">{cuisines.join(", ")}</p>
      <p className="text-center font-medium">{avgRating} Rating</p>
      <p className="text-center font-medium">{costForTwo}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-amber-500 rounded-md font-thin text-white p-1">
          Best Restaurant
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

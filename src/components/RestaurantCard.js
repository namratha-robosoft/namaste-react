import { CDN_LINK } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="m-4 py-2 w-[250px] bg-gray-100 shadow rounded-lg h-[400px]">
      <img
        className="h-[250px] w-[250px]"
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
        <label className="absolute bg-amber-500 rounded-md font-bold text-white p-1">
          Best Restaurant
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

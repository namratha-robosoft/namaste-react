import { CDN_LINK } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_LINK + cloudinaryImageId} alt="restaurant" />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Rating</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;

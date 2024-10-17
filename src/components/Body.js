import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const { loggedInUser, setUserInfo } = useContext(UserContext);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const onSearchHandler = () => {
    const filteredList = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  if (!onlineStatus)
    return (
      <h2>
        Looks like your internet is off, Please check your internet connection!!
      </h2>
    );
  console.log(listOfRestaurants);
  return listOfRestaurants.length === 0 && !search ? (
    <Shimmer />
  ) : (
    <div className="max-w-[75%] m-auto p-10 ">
      <div className="flex pb-10">
        <div className="flex w-[50%]">
          <input
            className="p-2 border-2 rounded-md w-full"
            type="text"
            placeholder="Search for restaurants"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearchHandler();
            }}
            value={search}
          />
        </div>
        <div>
          <button
            className="ml-4 min-w-[100px] bg-orange-700 text-white font-semibold p-2 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="ml-4 min-w-[100px] bg-gray-400 font-semibold text-white p-2 rounded-md"
            onClick={() => {
              setSearch("");
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Clear
          </button>
        </div>

        {/* <input
          className="m-2 p-2 border border-black"
          placeholder="Enter User Name"
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        /> */}
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

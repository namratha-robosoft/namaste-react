import { useEffect, useState } from "react";
import { RESTAURANT_LINK } from "./constants";

const useFetchRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LINK);
    const json = await data.json();

    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants;
};

export default useFetchRestaurants;

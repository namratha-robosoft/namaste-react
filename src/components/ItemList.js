import { MENU_IMAGE_LINK } from "./utils/constants";

const ItemList = ({ itemCards }) => {
  return (
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
                className="w-[100px] h-[100px]"
                src={MENU_IMAGE_LINK + item.card.info.imageId}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

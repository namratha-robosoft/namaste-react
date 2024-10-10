import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const onCartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 mt-24 max-w-[800px] mx-auto  bg-slate-50">
      <div className="flex justify-between">
        <h3 className="text-2xl text-slate-600 font-bold text-center">Cart</h3>
        <button
          className="bg-slate-500 text-white p-2 rounded-lg"
          onClick={onCartClear}
        >
          Clear Cart
        </button>
      </div>

      <div>
        {cartItems.length === 0 && <h1>Cart is empty, Add some items.</h1>}
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

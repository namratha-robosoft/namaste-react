import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [itemTotal, setItemTotal] = useState(0);
  const [deliveryFees, setDeliveryFees] = useState(0);
  const [gstCharges, setGstCharges] = useState(0);

  const dispatch = useDispatch();

  const onCartClear = () => {
    dispatch(clearCart());
    setItemTotal(0);
    setDeliveryFees(0);
    setGstCharges(0);
  };

  useEffect(() => {
    if (cartItems.length) {
      const total = cartItems.reduce((sum, item) => {
        sum += item.card.info.price || item.card.info.defaultPrice;
        return sum;
      }, 0);
      setDeliveryFees(100);
      setGstCharges(20);
      setItemTotal(total);
    }
  });

  return (
    <div className="mt-24 max-w-[800px] mx-auto">
      <div className=" p-4  bg-slate-50">
        <div className="flex justify-between">
          <h3 className="text-2xl text-slate-600 font-bold text-center">
            Cart
          </h3>
          <button
            className="bg-slate-500 text-white p-2 rounded-lg"
            onClick={onCartClear}
          >
            Clear Cart
          </button>
        </div>

        <div>
          {cartItems.length === 0 && <h1>Cart is empty, Add some items.</h1>}
          <ItemList itemCards={cartItems} isCart={true} />
        </div>
      </div>
      {itemTotal !== 0 && (
        <div className="mt-4 w-1/2 float-right">
          <h2 className="font-semibold text-xl text-slate-600 py-1 mt-2">
            Bill Details
          </h2>
          <hr className="w-1/6 border-orange-500 border-2" />
          <ul className="pt-4">
            <li className="flex justify-between text-slate-800 font-light text-sm py-1">
              <span>Item Total</span>
              <span>{itemTotal / 100}</span>
            </li>
            <li className="flex justify-between text-slate-800 font-light text-sm py-1">
              <span>Delivery Fee</span>
              <span>{deliveryFees}</span>
            </li>
            <li className="flex justify-between text-slate-800 font-light text-sm py-1">
              <span>GST and Restaurant Charges</span>
              <span>{gstCharges}</span>
            </li>
            <hr className="py-1" />
            <li className="flex justify-between text-slate-800 font-semibold text-md py-1">
              <span>To Pay</span>
              <span>{itemTotal / 100 + deliveryFees + gstCharges}</span>
            </li>
          </ul>
          <div className="mb-6">
            <button
              type="submit"
              className="block w-full rounded-md mt-4 bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => onLoginHandler()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

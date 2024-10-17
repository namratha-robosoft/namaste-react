import logo from "../assets/logo.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const [openPanel, setOpenPanel] = useState(false);

  const handleLogin = () => {
    setOpenPanel(true);
  };

  return (
    <div className="shadow-lg">
      <div className="max-w-[75%] m-auto flex justify-between  align-middle">
        <div className="w-16">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="flex p-4 items-center">
          <ul className="flex items-center">
            <li className="px-4 hover:text-amber-600 text-gray-400 text-sm font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 hover:text-amber-600 text-gray-400 text-sm font-semibold">
              <Link to="/our-team">Our Team</Link>
            </li>
            <li className="px-4 hover:text-amber-600 text-gray-400 text-sm font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
            <li className="px-4 hover:text-amber-600 text-gray-400 text-sm font-semibold">
              <Link to="/cart">
                <span className="bg-amber-600 px-1 py-[1px] text-white text-sm rounded-lg">
                  {cartItems?.length}
                </span>{" "}
                Cart
              </Link>
            </li>
            {/* <li className="px-4">Online Status {onlineStatus ? "🟢" : "🔴"}</li> */}
            <li className="px-4 hover:text-amber-600 text-gray-400 text-sm font-semibold">
              {!loggedInUser ? (
                <button
                  className="bg-orange-400 text-white px-3 py-1 rounded-xl"
                  onClick={() => handleLogin()}
                >
                  Sign In
                </button>
              ) : (
                <div>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
              )}

              {openPanel && (
                <div className="background-cs-overlay z-10 w-full h-full fixed top-0 left-0">
                  <SignIn setOpenPanel={() => setOpenPanel(false)} />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

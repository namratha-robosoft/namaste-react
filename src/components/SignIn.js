import { useContext } from "react";
import UserContext from "./utils/UserContext";

const SignIn = ({ setOpenPanel }) => {
  const { setUserInfo } = useContext(UserContext);

  const closeHandler = () => {
    setOpenPanel();
  };

  const onLoginHandler = () => {
    setUserInfo("Namratha Kulal");
    setOpenPanel();
  };

  return (
    <div className="w-[700px] h-full z-50 bg-white fixed top-0 right-0 p-10 ">
      <div>
        <button onClick={() => closeHandler()}>❌</button>
      </div>
      <div>
        <h2 className="py-4 text-gray-500 font-bold text-2xl">Login</h2>
        <div>
          <input
            className="block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Phone Number"
            id="phone"
          />
        </div>
        <div className="pt-5">
          <button
            type="submit"
            className="block w-1/2 rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => onLoginHandler()}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import OurTeam from "./components/OurTeam";
import SignIn from "./components/SignIn";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

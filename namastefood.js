import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/aboutus";
import Contact from "./src/components/contactus";
import Error from "./src/components/error";
import Restaurantmenu from "./src/components/restaurantmenu";
import Shimmer from "./src/components/shrimmer";
import Grocery from "./src/grocery1";
import userdata from "./src/components/usercontext";
import { useContext, useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./src/components/appstore";
import Cart from "./src/components/cartpage";
import Cardpractise from "./src/components/Cardpractise";
import ControlledCard from "./src/components/ControlledCard";
const AppLayout = () => {
  const [username, setusername] = useState(null);
  useEffect(() => {
    const data = {
      username: "sashank tadimeti",
    };
    setusername(data.username);
  }, []);
  return (
    <Provider store={appStore}>
      <userdata.Provider value={{ loggedin: username, setusername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userdata.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <Restaurantmenu /> },
      { path: "/grocery", element: <Grocery /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/practise",
        element: (
          <>
            <Cardpractise />
          </>
        ),
      },

      // {path:"/example",element:<Example/>}
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

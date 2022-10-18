import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import ViewHotels from "../../Pages/ViewHotels/ViewHotels";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/view-hotels",
        element: <ViewHotels></ViewHotels>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Access/Login";
import SignUp from "../pages/Access/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Shared/profile/Profile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path:"/order/:category",
          element: <Order></Order>
        },
        {
          path:"login",
          element: <Login></Login>
        },
        {
          path:"signUp",
          element: <SignUp></SignUp>
        },
        {
          path:"profile",
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        }
      ]
    },
  ]);